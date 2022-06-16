import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DatePickerM, { CalendarContainer } from "react-datepicker";
import { useState } from 'react';
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "./styles.css";

export default function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const years = range(new Date().getFullYear(), getYear(new Date()) + 50, 1);

    const [flagYears, setFlagYears] = useState(false);
    const [flagMonth, setFlagMonth] = useState(false);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const MyHeader = ({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,

    }) => {
        return (
            <View style={styles.header}>
                <Pressable onPress={decreaseMonth}>
                    <Text>{"<"}</Text>
                </Pressable>
                <View>
                    <Text>{getYear(date)}</Text>
                    {!flagYears && <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                        {years.map((year, i) => {
                            return <Pressable onPress={() => changeYear(year)}> 
                                <Text>{year}</Text>
                            </Pressable>
                        })}
                    </ScrollView>}
                </View>
                <View>
                    <Text>{months[getMonth(date)]}</Text>
                    {!flagMonth && <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                        {months.map((month, i) => {
                            return <Pressable onPress={() => changeMonth(months.indexOf(month))}>
                                <Text>{month}</Text>
                            </Pressable>
                        })}
                    </ScrollView>}
                </View>
                <Pressable onPress={increaseMonth}>
                    <Text>{">"}</Text>
                </Pressable>
            </View>
        )
    }

    const changeDate = (newValue, type) => {
        if (type === "year") {
            return new Date(newValue, startDate.getMonth(), startDate.getDay());
        } else {
            return new Date(startDate.getFullYear(), newValue, startDate.getDay());
        }
    }

    const MyContainer = ({ className, children }) => {
        return (
            <View style={styles.container}>
                <CalendarContainer className={className}>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </View>
        );
    };
    return (
       <View style={styles.container}>
         <DatePickerM
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            renderCustomHeader={MyHeader}
            calendarContainer={MyContainer}
            selectsStart={startDate}
            calendarClassName={'calender'}
            inline
        />
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        padding: 6,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: 300,
        height: 150
    },
    scroll: {
        height: 100,
    },
    calendarContainer: {
        width: 300,
        height: 300,
        backgroundColor: "blue",
        position: "absolute",
    },
    calendar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        height: 300,
        backgroundColor: "blue",
        // position: "absolute",
    }
})