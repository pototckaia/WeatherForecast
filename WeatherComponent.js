import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as WeatherText from './WeatherText';

export default class WeatherComponent extends Component {
  
  constructor(props) {
    super();
    this.info = props.info;
  }
  
  render() {
    var dayInfo = this.info.date.format('DD-MM-YYYY');
    var tempInfo = this.info.minTemp == this.info.maxTemp ? this.info.minTemp + "°C": this.info.minTemp + "°C - " + this.info.maxTemp + "°C";
    var typeMeaning = WeatherText.weatherTypeMeaning[this.info.type]
    var typeDef = WeatherText.weatherTypeDefinition[this.info.type]
    var windSpeedMeaning = WeatherText.windSpeedTypeMeaning[this.info.windSpeed]
    var windSpeedDef = WeatherText.windSpeedTypeDefinition[this.info.windSpeed]
    return <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image source={WeatherText.imagesPath[this.info.type].uri} style={ styles.image }/>
      </View>
      <View style={styles.textView}>
        <Text style={styles.header}>{dayInfo}</Text>
        <Text style={styles.text}>{tempInfo}</Text>
        <Text style={styles.text}>{typeMeaning}</Text>
        <Text style={styles.text}>{windSpeedMeaning + " - " + windSpeedDef}</Text>
        <Text style={styles.text}>{typeDef}</Text>
      </View>
    </View>
  }
}

var styles = StyleSheet.create({ 
  mainView: {
    alignItems: 'center',
    flexDirection: "row"
  },
  imageView: {
    flex: 0.5,
    justifyContent: 'center',
    width: 131,
    height: 66,
  },
  image: {
    width: 131, 
    height: 66
  },
  textView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  header: {
    textAlign: "center",
    fontSize: 26,
    color: '#993300'
  },
  text: {
    fontSize: 24
  },
});