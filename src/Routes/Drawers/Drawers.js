import React from 'react'
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from '../BottomTabs/BottomTabs';
import DrawerContent from './DrawerContent';
import Profile from '../../Screens/Profile/Profile';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function DrawerNavigation(props) {
  return (

    <Drawer.Navigator initialRouteName="HomeTabs" screenOptions={{ headerShown: false }} openByDefault={false}
      drawerContent={props => <DrawerContent {...props} />} drawerStyle={{
        backgroundColor: 'white',
        width: 220,
      }}>
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
      <Stack.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>

  )
}
