import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/HomeScreen/HomeScreen';
import Screen from '../../Screens/lastscreen/Screen';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        // define here all Home tabs route here
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} /> 
        <Stack.Screen name="Screen" component={Screen} /> 
      </Stack.Navigator>
    )
}
