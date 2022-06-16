import { Animated, Dimensions, PanResponder, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';

const { width, height } = Dimensions.get("window");

export default function Dragged({ index, items, renderItem, setNewIndex, height, setIndex, zIndex, indexFlag }) {
    const pan = useRef(new Animated.ValueXY()).current;
    const btnRef = useRef(null);
    const responder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dy: pan.y },
                ],
                {
                    useNativeDriver: true
                }
            ),
            onPanResponderRelease: (event, state) => {
                let yNew = state.dy;
                if (index === items.length - 1) {
                    if (yNew > 0) {
                        setNewIndex(index, index);
                    }
                    else {
                        yNew = yNew - (yNew * 2);
                        let move = Math.round(yNew / height);
                        setNewIndex(index, index - move >= 0 ? index - move : 0)
                    }
                } else {
                    if (yNew > 0) {
                        let move = Math.round(yNew / height);
                        setNewIndex(index, index + move > items.length ? index + move : items.length)
                    }
                    else {
                        yNew = yNew - (yNew * 2);
                        let move = Math.round(yNew / height);
                        setNewIndex(index, index - move >= 0 ? index - move : 0)
                    }
                }
                setIndex()
            }
        })
    ).current;
    useEffect(() => {
        pan.setValue({ y: 0, x: 0 });
    }, [items]);

    return (
        <>
            {index === indexFlag ? <Animated.View
                style={{
                    transform: [{ translateY: index === indexFlag ? pan.y : 0 }],
                    zIndex: zIndex
                }}
                {...responder.panHandlers}
            >
                <View >
                    {renderItem}
                </View>
            </Animated.View> :
                <Animated.View
                    style={{
                        transform: [{ translateY: index === indexFlag ? pan.y : 0 }],
                        zIndex: zIndex
                    }}
                >
                    <View >
                        {renderItem}
                    </View>
                </Animated.View>}
        </>
    )
}
