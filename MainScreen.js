import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import DateLoading from "./DateLoading"
import WeatherComponent from "./WeatherComponent"

export default class MainScreen extends Component {

  state = {
    isLoaded: false,
    btcPrice: NaN,
    weatherForecast: null,
    currentDayForecast: null,
    errorMessage: null
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (!this.state.isLoaded || this.state.errorMessage) {
      var text = this.state.errorMessage ? this.state.errorMessage : "Загрузка...";
      return <View style={styles.centerTextView}>
        <Text style={styles.centerText}>{text}</Text>
      </View>
    }

    return (
      <View>
        <View style={styles.btcView}>
          <Text style={styles.btcTitle}>Курс биткоина на сегодня:</Text>
          <Text style={styles.btcText}>{this.state.btcPrice} USD</Text>
        </View>
        {this.state.currentDayForecast ? (
          <WeatherComponent info={this.state.currentDayForecast}></WeatherComponent>
        ): (
          <Text style={styles.forecastNotFindText}>Прогноз погоды на сегодняшний день найти не удалось</Text>
        )}
        <View style={styles.buttonView}>
          <Button title="Прогноз на неделю" color="#841584" onPress={() => {
            this.props.navigation.navigate("WeeklyWeather", {
              weatherForecast: this.state.weatherForecast,
            });
          }}/>
        </View>
      </View>
    );
  }

  async loadData() {
    try {
      var loading = new DateLoading()
      var price = await loading.getBtcPrice();
      this.setState({
        btcPrice: price
      });
      
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.loadWeatherData(pos)
        },
        (_) => {
          this.setState({
            errorMessage: 'Не удалось получить геолокацию',
          });
        }
      )

    } catch (error) {
      this.setState({
        errorMessage: "Не удалось загрузить данные"
      })
    }
  }

  async loadWeatherData(pos) {
    // try {
      var loading = new DateLoading()
      var weathers = await loading.getWeathereForecastForWeek(pos.coords.latitude, pos.coords.longitude)
      this.setState({
        weatherForecast: weathers[0],
        currentDayForecast: weathers[1],
        isLoaded: true
      })
    // } catch (error) {
    //   this.setState({
    //     errorMessage: "Не удалось загрузить данные"
    //   })
    // }
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
  },
  centerTextView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    fontSize: 30,
  },
  forecastNotFindText: {
    fontSize: 30
  },
  buttonView: {
    alignItems: "center",
    marginTop: 30
  }
});