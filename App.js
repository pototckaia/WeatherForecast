import React from 'react';
import MainScreen from './MainScreen';
import WeeklyWeather from './WeeklyWeather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="WeeklyWeather" component={WeeklyWeather}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}