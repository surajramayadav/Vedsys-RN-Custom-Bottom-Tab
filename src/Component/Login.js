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
  Alert,
  CheckBox,
  ImageBackground,
} from 'react-native';
import {useEffect} from 'react';
import QuestionOne from './QuestionOne';
import axios from 'axios';
import Fn from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// const actionSheetRef = createRef();

const Login = ({
  toggleActionSheet,
  setToggleActionSheet,
  navigation,
  route,
}) => {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');

  let data = {
    username: Username,
    password: Password,
  };
  console.log('DATA : ', data);
  const loginHandler = () => {
    axios
      .post('http://web01.exits.in:8001/api/auth/signin', data)
      .then(response => {
        console.log('response.data >> ', response.data);
        if (response.data.success == true) {
          // Alert.alert(`${response.data.success}`)
          navigation.push('Screen');
          console.log('andar aaya hai');
        } else {
          Alert.alert(`wrong username or password!!!`);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
        Alert.alert(`wrong credentials`);
      });
  };
  // let actionSheet;

  return (
    <>
      {/* <ActionSheet ref={actionSheetRef}> */}
      <View style={{backgroundColor: 'white', padding: 20,borderRadius: 20}}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            Padding: 10,
          }}>
          Login
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 10,
            fontWeight: 'bold',
            color: 'black',
            Padding: 10,
          }}>
          New User ?
          <Text
            style={{
              textAlign: 'left',
              fontSize: 10,
              fontWeight: 'bold',
              color: '#9CD161',
              marginLeft: 10,
            }}>
            sign in
          </Text>
        </Text>

        <TextInput
          keyboardType="username-address"
          placeholder="Enter Username"
          placeholderTextColor="#a7abb5"
          onChangeText={e => {
            setUsername(e), console.log('Username', e);
          }}
          style={{
            color: '#a7abb5',
            marginBottom: 10,
            borderBottomColor: '#a7abb5',
            borderBottomWidth: 1,
            fontSize: 15,
          }}
          value={Username}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          placeholderTextColor="#a7abb5"
          onChangeText={e => {
            setPassword(e), console.log('Password', e);
          }}
          style={{
            color: '#a7abb5',
            marginBottom: 10,
            borderBottomColor: '#a7abb5',
            borderBottomWidth: 1,
            fontSize: 15,
          }}
          value={Password}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ForgotPassword')
          }

          // style={{
          //   backgroundColor: 'black',
          //   padding: 5,
          //   width: 250,
          //   justifyContent: 'center',
          //   alignSelf: 'center',
          //   borderRadius: 30,
          //   marginBottom: 10,
          // }}
        >
          {/* onPress={forgetPasswordHandler}> */}
          <Text
            style={{
              textAlign: 'left',
              fontSize: 10,
              fontWeight: 'bold',
              color: '#9CD161',
              Padding: 10,
              marginBottom: 10,
            }}>
            Fogot Password ?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.replace('Register')}
          style={{
            backgroundColor: 'black',
            padding: 5,
            width: 250,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems:'center',
            borderRadius: 30,
            marginBottom: 10,
            height:responsiveHeight(6)
          }}
          onPress={loginHandler}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '600',
              // textAlign: 'center',
              // marginBottom: 10,
              display: 'flex',
              // justifyContent: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
            Padding: 10,
            marginBottom: 5,
          }}>
          --------Or Login with-------
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          <Image
            // style={styles.tinyLogo}
            source={require('../Images/search.png')}
            style={{height: 25, width: 25, margin: 15}}
          />
          <Image
            // style={styles.tinyLogo}
            source={require('../Images/facebook.png')}
            style={{height: 25, width: 25, margin: 15}}
          />
        </View>
      </View>
      {/* </ActionSheet> */}
      {/* {toggleActionSheet == 3 && (
        <QuestionOne toggleState={toggleActionSheet} />
      )} */}
    </>
  );
};

export default Login;