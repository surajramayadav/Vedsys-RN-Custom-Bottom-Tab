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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// const actionSheetRef = createRef();

const SignUp = ({toggleActionSheet, setToggleActionSheet}) => {
  // let actionSheet;
  const [Firstname, setFirstname] = React.useState('');
  const [Lastname, setLastname] = React.useState('');
  const [Country, setCountry] = React.useState('');
  const [MobileNumber, setMobileNumber] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [Roles, setRoles] = React.useState('');
  const [ConfirmPassword, setConfirmPassword] = React.useState('');

  let data = {
    username: Firstname,
    password: Password,
    email: Email,
    name: Firstname,
    roles: 'user',
  };
  console.log('DATA : ', data);
  const signupHandler = () => {
    axios
      .post('http://web01.exits.in:8001/api/auth/signup', data)
      .then(response => {
        console.log('response.data >> ', response.data);
        if (response.data.success == true) {
          // Alert.alert(`${response.data.success}`)
          setToggleActionSheet(3);

          console.log('andar aaya hai');
        } else {
          Alert.alert(`wrong username or password!!!`);
          // setToggleActionSheet(3);

        }
      })
      .catch(error => {
        console.error('There was an error!', error);
        Alert.alert(`Failed to signup!!!`);
      });
  setToggleActionSheet(3);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>
  // const Validate = (e, msg) => {
  //   // console.log(e, msg)
  //   const regexname = new RegExp(/^[a-zA-Z ]+$/);
  //   const regexEmail = new RegExp(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/);
  //   // const regexPhone = new RegExp(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
  //   switch (msg) {
  //     case "First Name":
  //       if (e.length === 0) {
  //         setFirstname("First Name is required");
  //       } else if (!regexname.test(e)) {
  //         setFirstname("Invalid first name");
  //       } else {
  //         setFirstname();
  //       }
  //       break;
  //       case "Last name":
  //         if(e.length === 0){
  //           setLastname("Name is required");
  //         } else if (!regexname.test(e)) {
  //           setLastname("Invalid Last name");
  //         } else {
  //           setLastname();
  //         }break;
  //         case "Country":
  //         if(e.length === 0){
  //           setCountry("Country is required");
  //         } else if (!regexname.test(e)) {
  //           setCountry("Invalid Country");
  //         } else {
  //           setCountry();
  //         }break;
  //         case "Mobile Number":
  //         if(e.length === 0){
  //           setMobileNumber("Phone No. is required");
  //         } else if (!regexname.test(e)) {
  //           setMobileNumber("Invalid Phone No.");
  //         } else {
  //           setMobileNumber();
  //         }break;
  //     case "email":
  //       if (e.length === 0) {
  //         setEmail("Email is required");
  //       } else if (!regexEmail.test(e)) {
  //         setEmail("Invalid email");
  //       } else if (regexEmail.test(e)) {
  //         HandleEmail(e)
  //       } else {
  //         setEmail();
  //       }
  //       break;
  //     case "Password":
  //       if (e.length === 0) {
  //         setPassword("Password is required ");
  //       } else if (e.length <= 5) {
  //         setPassword("'Password is too small");
  //       } else {
  //         setPassword();
  //       }
  //       case "Confirm Password":
  //       if (e.length === 0) {
  //         setConfirmPassword("Password is required ");
  //       } else if (e.length <= 5) {
  //         setConfirmPassword("'Password is too small");
  //       } else {
  //         setConfirmPassword();
  //       }
  //       break;
  //   }
  // }
  };
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <>
      {/* <ActionSheet ref={actionSheetRef}> */}
      <View style={{backgroundColor: 'white', padding: 20,borderRadius: 22}}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 25,
            fontWeight: 'bold',
            color: '#000',
            Padding: 10,
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 10,
            fontWeight: 'bold',
            color: 'black',
            Padding: 10,
          }}>
          Already Have an account ?{' '}
          <Text style={{color: '#9CD161'}}>Login</Text>
        </Text>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#a7abb5"
          onChangeText={e => {
            setFirstname(e);
          }}
          style={{
            color: "#000",
            marginBottom: 10,
            borderBottomColor: '#a7abb5',
            borderBottomWidth: 1,
            fontSize: 15,
          }}
          value={Firstname}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#a7abb5"

          onChangeText={e => {
            setLastname(e), console.log('Lastname', e);
          }}
          style={{
            color: '#a7abb5',
            marginBottom: 10,
            borderBottomColor: '#a7abb5',
            borderBottomWidth: 1,
            fontSize: 15,
          }}
          value={Lastname}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            placeholder="Country"
            placeholderTextColor="#a7abb5"

            onChangeText={e => {
              setCountry(e), console.log('Country', e);
            }}
            style={{
              color: '#a7abb5',
              marginBottom: 10,
              borderBottomColor: '#a7abb5',
              borderBottomWidth: 1,
              flex: 0.2,
              fontSize: 15,
            }}
            value={Country}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Mobile Number"
            placeholderTextColor="#a7abb5"
            onChangeText={e => {
              setMobileNumber(e), console.log('MobileNumber', e);
            }}
            style={{
              color: '#a7abb5',
              marginBottom: 10,
              borderBottomColor: '#a7abb5',
              borderBottomWidth: 1,
              fontSize: 15,
              flex: 0.7,
            }}
            value={MobileNumber}
          />
        </View>

        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#a7abb5"
          onChangeText={e => {
            setEmail(e), console.log('Email', e);
          }}
          style={{
            color: '#a7abb5',
            marginBottom: 10,
            borderBottomColor: '#a7abb5',
            borderBottomWidth: 1,
            fontSize: 15,
          }}
          value={Email}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Password"
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

        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor="#a7abb5"
          onChangeText={e => {
            setConfirmPassword(e), console.log('ConfirmPassword', e);
          }}
          style={{
            color: '#a7abb5',
            marginBottom: 10,
            borderBottomColor: '#a7abb5',
            borderBottomWidth: 1,
            fontSize: 15,
          }}
          value={ConfirmPassword}
        />

        <TouchableOpacity
          // onPress={() => navigation.replace('Register')}
          style={{
            backgroundColor: 'black',
            padding: 5,
            width: 200,
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 30,
            height:responsiveHeight(5),
            marginBottom: 10,
          }}
          onPress={signupHandler}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}>
            Sign Up
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
            color:'#a7abb5'
          }}>
          <Text style={{color:'black'}}>
          ------------</Text>
          Or Sign up with<Text style={{color: 'black'}}>----------</Text>
        </Text>
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
      </View>
      {/* </ActionSheet> */}
    </>
  );
};

export default SignUp;
