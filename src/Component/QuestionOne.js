import ActionSheet from 'react-native-actions-sheet';
import React, {createRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Button,
  Modal,
  View,
  CheckBox,
  ImageBackground,
  ProgressBar,
} from 'react-native';
import {useEffect} from 'react';
import * as Progress from 'react-native-progress';
import QuestionTwo from './QuestionTwo';
import {useDispatch} from 'react-redux';
import {setUserHabits} from '../Redux/Slice/LoginSlice';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// const actionSheetRef = createRef();

const QuestionOne = ({toggleActionSheet, setToggleActionSheet}) => {
  const dispatch = useDispatch();

  const gotoQuestionTwo = smoke => {
    console.log('go to QuestionTwo smoke', smoke);
    dispatch(setUserHabits({smoke}));
    setToggleActionSheet(4);
  };
  // let actionSheet;
  // React.useEffect(() => {
  //   actionSheetRef.current?.setModalVisible();
  // }, []);

  return (
    <>
      {/* <ActionSheet ref={actionSheetRef}> */}
      <View style={{backgroundColor: 'white', margin: 20}}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Questionaire
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Lets Start
        </Text>

        <Progress.Bar progress={0.1} width={320} color="black" />
        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              Padding: 10,
              marginBottom: 20,
            }}>
            Do you enjoy Smoke ?
          </Text>

          <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 5,
                width: responsiveWidth(30),
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 30,
                marginBottom: 5,
                borderColor:'#989898'
              }}
              onPress={() => {
                gotoQuestionTwo(true);
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 10,
                  borderWidth: 2,
                  borderRadius: 30,
                  padding: 5,
                }}>
                Yes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 5,
                width: responsiveWidth(30),
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 30,
                marginBottom: 10,
              }}
              onPress={() => {
                gotoQuestionTwo(false);
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  // marginBottom: 10,
                  borderWidth: 2,
                  borderRadius: 30,
                  padding: 5,
                }}>
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ActionSheet> */}
      {/* {toggleActionSheet == 4 && (
        <QuestionTwo toggleState={toggleActionSheet} />
      )} */}
    </>
  );
};

export default QuestionOne;
