import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WeatherComponent from "./WeatherComponent"

export default class WeeklyWeatherScreen extends Component {
  
  state = {
    weatherForecast: []
  }

  componentDidMount() {
    this.setState({
      weatherForecast: this.props.route.params.weatherForecast
    });
  }

  render() {
    var WeatherComponents = [];
    for (let i in this.state.weatherForecast) {
      WeatherComponents.push((<WeatherComponent key={i} info={this.state.weatherForecast[i]}></WeatherComponent>))
    }
    
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollView} >
          {WeatherComponents}
        </ScrollView>
        <View style={styles.buttonView}>
          <Button styles={styles.backButton} title="Назад" onPress={() => { this.props.navigation.goBack(); }}/>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({ 
  mainView: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  buttonView: {
    flexDirection: 'column',
    justifyContent:'flex-end'
  }
});