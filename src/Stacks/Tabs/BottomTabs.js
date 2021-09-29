import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStacks/HomeStack';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import HealthStack from '../HealthStack/HealthStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#d9d9d9',
        style: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="HealthStack" component={HealthStack} />
    </Tab.Navigator>
  );
}
