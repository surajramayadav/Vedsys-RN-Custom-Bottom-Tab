import React from 'react';
import {View, Text} from 'react-native';
import ForgotPassword from './src/Component/ForgotPassword';
import LoadingScreen from './src/Component/LoadingScreen';
import Navigation from './src/Routes/Navigation';
import CareTacker from './src/Screens/CareTaker/CareTacker';
// import HomeScreen from './src/Screens/HomeScreen/HomeScreen'
// import Screen from './src/Screens/lastscreen/Screen'
// import Profile from './src/Screens/Profile/Profile'

// import Actionsheet from './src/Views/Auth/Actionsheet'
import Contacts from './src/Screens/Contacts/Contacts';
import FindDoctor from './src/Screens/FindDoctor/FindDoctor';
import ViewDoctor from './src/Screens/FindDoctor/ViewDoctor';
import FindMedicine from './src/Screens/FindMedicine/FindMedicine';
import FoodServices from './src/Screens/Food/FoodServices';
import Media from './src/Screens/Media/Media';
import MP from './src/Screens/Microphone/Microphone';

import Prescription from './src/Screens/Prescribe/Prescription';
import Profile from './src/Screens/Profile/Profile';
import Reminder from './src/Screens/Reminder/Reminder';

import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
      {/* <Reminder /> */}
      {/* <FoodServices /> */}
      {/* <CareTacker /> */}
      {/* <FindDoctor /> */}
      {/* <ViewDoctor /> */}
      {/* <FindMedicine /> */}
      {/* <Contacts /> */}
      {/* <Media /> */}
      {/* <MP /> */}
      {/* <Prescribe /> */}
      {/* <Prescription /> */}
      {/* <LoadingScreen /> */}
      {/* <Profile /> */}
      {/* <ForgotPassword /> */}
    </Provider>
  );
}
