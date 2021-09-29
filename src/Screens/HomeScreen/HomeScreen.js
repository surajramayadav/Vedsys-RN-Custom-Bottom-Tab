import ActionSheet from 'react-native-actions-sheet';
import React, {createRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import SignUp from '../../Component/SignUp';
import Login from '../../Component/Login';
import ForgetPassword from '../../Component/ForgotPassword';
import QuestionOne from '../../Component/QuestionOne';
import QuestionTwo from '../../Component/QuestionTwo';
import QuestionThree from '../../Component/QuestionThree';
import QuestionFour from '../../Component/QuestionFour';
import QuestionFive from '../../Component/QuestionFive';
import QuestionSix from '../../Component/QuestionSix';
import Screen from '../lastscreen/Screen';
import AddRoutine from '../AddRoutine/AddRoutine';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
export default function HomeScreen({navigation, route}) {
  // let actionSheet;
  const actionSheetRef = createRef();

  const [toggleActionSheet, setToggleActionSheet] = useState(2);
  const gotoSignUp = () => {
    setToggleActionSheet(1);
    actionSheetRef.current?.setModalVisible();
  };

  const gotoLogin = () => {
    setToggleActionSheet(2);
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <>
      <>
        <ImageBackground
          source={require('../../Images/11.png')}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              marginTop: 50,
              // marginLeft: 70,
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: responsiveFontSize(3),
                  fontWeight: 'bold',
                  width: '65%',
                }}>
                Say Hello to {'\n'}your's Shravan
                {/* {toggleActionSheet} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                width: '78%',
                fontWeight: 'bold',
              }}>
              Now its easy to find out your fitness status{'\n'}and pill reminders on
              your hands
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                padding: 10,
                width: 200,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 30,
                marginBottom: 15,
              }}
              onPress={gotoLogin}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#062816',
                padding: 10,
                width: 200,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 30,
              }}
              onPress={gotoSignUp}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {toggleActionSheet && (
          <>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
              }}>
              <ActionSheet ref={actionSheetRef}>
                {toggleActionSheet == 1 && (
                  <SignUp
                    toggleState={toggleActionSheet}
                    setToggleActionSheet={setToggleActionSheet}
                  />
                )}
                {toggleActionSheet == 2 && (
                  <Login
                    setToggleActionSheet={setToggleActionSheet}
                    navigation={navigation}
                    route={route}
                  />
                )}
                {toggleActionSheet == 3 && (
                  <QuestionOne
                    toggleState={toggleActionSheet}
                    setToggleActionSheet={setToggleActionSheet}
                  />
                )}
                {toggleActionSheet == 4 && (
                  <QuestionTwo
                    toggleState={toggleActionSheet}
                    setToggleActionSheet={setToggleActionSheet}
                  />
                )}
                {toggleActionSheet == 5 && (
                  <QuestionThree
                    toggleState={toggleActionSheet}
                    setToggleActionSheet={setToggleActionSheet}
                  />
                )}
                {toggleActionSheet == 6 && (
                  <QuestionFour
                    toggleState={toggleActionSheet}
                    setToggleActionSheet={setToggleActionSheet}
                  />
                )}
                {toggleActionSheet == 7 && (
                  <QuestionFive
                    toggleState={toggleActionSheet}
                    setToggleActionSheet={setToggleActionSheet}
                  />
                )}
                {toggleActionSheet == 8 && (
                  <QuestionSix
                    toggleState={toggleActionSheet}
                    setToggleActionSheet={setToggleActionSheet}
                    navigation={navigation}
                    route={route}
                  />
                )}
              </ActionSheet>
            </View>
          </>
        )}
      </>
    </>
  );
}
