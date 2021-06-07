import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class SmartBlock extends Component {
    url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    urlWeather = "http://www.7timer.info/bin/civillight.php?lon=131.9&lat=43.1&ac=0&unit=metric&output=json&tzshift=0";

    state = {
        counter: 0,
        btcPrice: 0,
    };

    constructor(props) {
        super();
        console.log("Welcome to constructor");
        console.log(this);
    }

    componentDidMount() {
        console.log("I'm mounted");
        this.getData();
    }

    render() {
        console.log("I'm rendering");
        return (
            <View style={styles.view}>
                <Text style={styles.text}>Bitcoin: {this.state.btcPrice} USD</Text>
                <Text style={styles.text}>I'm so smart {this.state.counter} times</Text>
                <Button title="Become smarter" onPress={() => this.buttonPressed()}/>
                <Button title="BACK" onPress={() => this.props.navigation.goBack()}/>
            </View>
        );
    }

    buttonPressed() {
        this.setState({
            counter: this.state.counter + 1
        });
        console.log(this.state.counter);
    }

    async getData() {
        try {
            var response = await fetch(this.url);
            console.log(response);
            var json = await response.json();
            console.log(json);
            var price = json.bpi.USD.rate;
            console.log(price);
            this.setState(
                {
                    btcPrice: price
                }
            );

            var r = await fetch(this.urlWeather);
            var j = await r.json();
            console.log(j);
        } catch (error) {
            alert("Failed to get data: " + error.message);
        }
    }
}

var styles = StyleSheet.create({ 
    view: {
        backgroundColor: '#0cc',
        padding: 10,
        margin: 5,
    },
    text: {
        fontSize: 32
    },
    button: {
        fontSize: 32,
    }
});

export default SmartBlock;