import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/HomeScreen/HomeScreen';
import Screen from '../../Screens/lastscreen/Screen';

const Stack = createStackNavigator();
export default function HealthStack() {
    return (
        // define here all Health tabs route here
        <Stack.Navigator initialRouteName="HealthScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeHealth" component={Home} /> 
        <Stack.Screen name="HealthScreen" component={Screen} /> 
      </Stack.Navigator>
    )
}
