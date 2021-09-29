import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawers from './Drawers/Drawers';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Views/Auth/SplashScreen';
import DrawerNavigation from './Drawers/Drawers';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import Services from '../Screens/Services/Services';
import FindMedicine from '../Screens/FindMedicine/FindMedicine';
import FindDoctor from '../Screens/FindDoctor/FindDoctor';
import CareTacker from '../Screens/CareTaker/CareTacker';
import FoodServices from '../Screens/Food/FoodServices';
import Grocery from '../Screens/Grocery/Grocery';
import ForgotPassword from '../Component/ForgotPassword';

const Stack = createStackNavigator();
export default function Navigation() {
  // const login = useSelector(state => state.login)
  // const {isLogged}=login
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="FindMedicine" component={FindMedicine} />
        <Stack.Screen name="FindDoctor" component={FindDoctor} />
        <Stack.Screen name="CareTacker" component={CareTacker} />
        <Stack.Screen name="FoodServices" component={FoodServices} />
        <Stack.Screen name="Grocery" component={Grocery} />
        {/* <Stack.Screen name="Auth" component={AuthStacks} /> */}
        <Stack.Screen name="Screen" component={DrawerNavigation} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
