import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeeklyWeatherScreen from './WeeklyWeatherScreen';
import MainScreen from './MainScreen';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="WeeklyWeather" component={WeeklyWeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}