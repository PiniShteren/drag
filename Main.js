import { Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
import Dragged from './Drag';
import { useDispatch, useSelector } from 'react-redux';
import { changePosition } from './redux';
import Lottie from "lottie-react";
export default function Main() {
    const dispatch = useDispatch();

    const itemsArr = useSelector(state => state.state.items);
    const [items, setItems] = useState(items);
    const [index, setIndex] = useState();
    const [flag, setflag] = useState(true)


    const setNewIndex = (index, newIndex) => {
        dispatch(changePosition(index, newIndex));
    }

    useEffect(() => {
        setItems(itemsArr);
    }, [itemsArr]);

    useEffect(() => {
        setTimeout(() => { setflag(false)}, 4000)
    }, []);

    return (
        <View style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center",}}>
            {!flag ? <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {items && items.map((e, i) => {
                return (
                    <Dragged
                        items={items}
                        key={i}
                        index={i}
                        indexFlag={index}
                        height={60}
                        setIndex={(i) => setIndex(i)}
                        zIndex={index === i ? 5 : 4}
                        setNewIndex={(index, newIndex) => setNewIndex(index, newIndex)}
                        renderItem={<Pressable style={{ width: 600, height: 50, backgroundColor: `rgb(${e.name * 34}, ${e.name * 34}, ${e.name * 34})`, display: "flex", marginBottom: 10, alignItems: "center", justifyContent: "center" }}>
                            {({ hovered }) => (
                                <>
                                    <Text selectable={false}>{e.name}</Text>
                                    {hovered && <TouchableHighlight underlayColor={""} style={{ position: "absolute", left: 10 }} onPressIn={(e) => { setIndex(i) }} >
                                        <Text selectable={false}>{'|||'}</Text>
                                    </TouchableHighlight >}
                                </>
                            )}
                        </Pressable>
                        }
                    />
                )
            })}
        </View> : <Lottie style={{position: "absolute"}} autoPlay loop animationData={require("./animation.json")} />}
        </View>
    )
}

const styles = StyleSheet.create({})