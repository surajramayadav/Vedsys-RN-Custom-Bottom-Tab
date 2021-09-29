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
  FlatList,
} from 'react-native';
import {useEffect} from 'react';
import * as Progress from 'react-native-progress';
import QuestionFour from './QuestionFour';
import {useDispatch} from 'react-redux';
import {setUserHabits} from '../Redux/Slice/LoginSlice';
// const actionSheetRef = createRef();

const QuestionThree = ({toggleActionSheet,setToggleActionSheet}) => {
  const dispatch = useDispatch();
  const gotoQuestionFour = walkTimes => {
    console.log('go to Question Four week', walkTimes);
    dispatch(setUserHabits({walkTimes}));
    setToggleActionSheet(6);
  };
 

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
            We are going
          </Text>
          <Progress.Bar progress={0.3} width={320} color="black" />
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
              How Many Times a Week ?
            </Text>
            <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
              <TouchableOpacity
                // onPress={() => navigation.replace('Register')}
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  width: 180,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  marginBottom: 5,
                }}
                onPress={() => {gotoQuestionFour(true);}}>
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
                  1 - 2 Times
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  width: 180,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  marginBottom: 10,
                }}
                onPress={() => {gotoQuestionFour(false);}}>
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
                  2 - 3 Times
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  width: 180,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  marginBottom: 10,
                }}
                onPress={() => {gotoQuestionFour(true);}}>
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
                  3 - 4 Times
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  width: 180,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  marginBottom: 10,
                }}
                onPress={() => {gotoQuestionFour(false);}}>
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
                  4 - 5 Times
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      {/* </ActionSheet> */}
      {/* {toggleActionSheet == 6 && (
        <QuestionFour toggleState={toggleActionSheet} />
      )} */}
      </>
       );
};

export default QuestionThree;
