import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { btcCurrentPriceUrl } from "./urlConfig"
import WeatherLoading from "./WeatherLoading"

class MainScreen extends Component {

    state = {
        btcPrice: 0,
    };

    constructor(props) {
        super();
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View style={styles.btcView}>
                <Text style={styles.btcTitle}>Курс биткоина на сегодня:</Text>
                <Text style={styles.btcText}>{this.state.btcPrice} USD</Text>
            </View>
        );
    }

    async getData() {
        try {
            // var response = await fetch(btcCurrentPriceUrl);
            // var json = await response.json();
            // var price = json.bpi.USD.rate_float;
            // this.setState({
            //         btcPrice: price
            // });

            var loading = new WeatherLoading()
            loading.getCurrentWeathere()
                .then((data) => {
                    console.log(data)
                    this.setState({

                    })
                })

        } catch (error) {
            alert("Не удалось загрузить данные" + error);
        }
    }
}

var styles = StyleSheet.create({ 
    btcView: {
        backgroundColor: "beige",
        padding: 10,
        margin: 10,
        borderRadius: 6,
    },
    btcTitle: {
        fontSize: 26
    },
    btcText: {
        fontSize: 28,
        textAlign: "center",
    }
});

export default MainScreen;