import React from 'react';
import { StyleSheet, View, Text } from "react-native";

export default function WeeklyWeather(props) {
    console.log("Hello from StupidBlock");
    console.log(props);
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

var styles = StyleSheet.create({ 
    view: {
        backgroundColor: '#c0c',
        padding: 10,
        margin: 5,
    },
    text: {
        fontSize: 32
    }


});