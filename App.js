import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SmartBlock from './SmartBlock';
import StupidBlock from './StupidBlock';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen labelStyle={styles.tab} name="MAIN" component={OurPreviousScreen}/>
        <Stack.Screen name="SMART" component={SmartBlock}/>
        <Stack.Screen name="STUPID" component={StupidBlock}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function OurPreviousScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StupidBlock title="OUR TITLE" randomProp="1">Internal data</StupidBlock>
      <SmartBlock randomProp="2">Internal data 2</SmartBlock>
      <Button title="Move forward" onPress={() => navigation.navigate('SMART')} />
   </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    fontSize:40
  },
  red: {
    backgroundColor: '#F00',
    flex: 1,
    alignSelf: 'stretch'
  },
  green: {
    backgroundColor: '#0F0',
    flex: 2,
    alignSelf: 'stretch'
  },
  blue: {
    backgroundColor: '#00F',
    flex: 3,
    alignSelf: 'stretch'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 50,
    color: "red",
    backgroundColor: "green",
  }
});
