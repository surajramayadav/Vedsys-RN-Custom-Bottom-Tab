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
import Screen from '../Screens/lastscreen/Screen';
import {useDispatch} from 'react-redux';
import {setUserHabits} from '../Redux/Slice/LoginSlice';
// import QuestionFive from './QuestionFive';

// const actionSheetRef = createRef();

const QuestionSix = ({
  toggleActionSheet,
  setToggleActionShee,
  setShowScreen,
  navigation,
  route,
}) => {
  const dispatch = useDispatch();

  // const [showScreen, setShowScreen] = React.useState(false);
  //   let actionSheet;
  const gotoScreen = prescription => {
    console.log('go to Screen', navigation);
    dispatch(setUserHabits({prescription}));
    navigation.navigate('Screen');
    // setShowScreen(true);
  };
  // React.useEffect(() => {
  //     actionSheetRef.current?.setModalVisible();
  //   }, []);

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
          We are almost done
        </Text>
        <Progress.Bar progress={1} width={320} color="black" />
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
            Are you under prescription?
          </Text>

          <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
            <TouchableOpacity
              // onPress={() => navigation.replace('Register')}
              style={{
                backgroundColor: 'white',
                padding: 5,
                width: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 30,
                marginBottom: 5,
              }}
              onPress={() => {gotoScreen(true);}}>
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
                width: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 30,
                marginBottom: 10,
              }}
              onPress={() => {gotoScreen(false);}}
            >
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
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default QuestionSix;
