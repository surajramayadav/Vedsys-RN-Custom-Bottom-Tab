import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Views/Auth/SplashScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import Profile from '../Screens/Profile/Profile';
import Screen from '../Screens/lastscreen/Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import BottomTabs from './Tabs/BottomTabs';
import HomeStack from './HomeStacks/HomeStack';
 
const Stack = createStackNavigator();

export default function Navigation() {
  // const login = useSelector(state => state.login)
  // const {isLogged}=login
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
