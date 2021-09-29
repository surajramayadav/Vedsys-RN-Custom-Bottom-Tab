import ActionSheet from 'react-native-actions-sheet';
import React, {createRef, useState,useSelector} from 'react';
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
} from 'react-native';

const actionSheetRef = createRef();

const ForgotPassword = () => {
  const [valid, setvalid] = useState(false);
  const [emailerr, setemailerr] = useState('Email is required');
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState();
  const login = useSelector(state => state.login);
  const {user} = login;
  const [emailcheck, setemailcheck] = useState(false);
  const call = new ApiCalls();
  const HandleForgetPwd = async () => {
    setvalid(true);
    try {
      setloading(true);

      if (emailerr == null) {
        const data = {
          email: email.toLowerCase(),
        };
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.accessToken}`,
          },
        };

        res = await call.Calls('admin/user/email', 'POST', data, config);
        if (res.status == '200') {
          console.log(res);
          // dispatch(setUser(res.data))
          dispatch(setIsLogged(true));
          setemailcheck(true);
          navigation.replace(route.params.screen);
        } else {
          // console.log(res)
          console.log(res.msg.response.data.message);
          alert(res.msg.response.data.message);
        }
      }
      // console.log(state)

      // console.log("res", res,)
      setloading(false);
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  };
  const Validate = (e, msg) => {
    // console.log(e, msg)
    const regexEmail = new RegExp(
      /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/,
    );

    switch (msg) {
      case 'email':
        if (e.length === 0) {
          setemailerr('Email is required');
        } else if (!regexEmail.test(e)) {
          setemailerr('Invalid email');
        } else {
          setemailerr();
        }
        break;
    }
  };
  
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
   let actionSheet;
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
        >
        <Text>Open ActionSheet</Text>
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef}>
        <View style={{backgroundColor: 'white', margin: 30}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              Padding: 10,
            }}>
            Forgot Password
          </Text>

          <TextInput
            placeholder="Email Address"
            onChangeText={e => {
              Validate(e, 'email'), setemail(e);
            }}
            style={{
              color: 'grey',
              marginBottom: 20,
              borderBottomColor: 'grey',
              borderBottomWidth: 2,
            }}
            value={Email}
          />
          {valid && emailerr && (
            <Text style={{marginLeft: 30, color: 'red'}}>{emailerr}</Text>
          )}
          <TouchableOpacity
            // onPress={() => HandleForgetPwd()}
            style={{
              backgroundColor: 'black',
              padding: 5,
              width: 250,
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 30,
              marginBottom: 10,
            }}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 10,
                }}>
                Get Password
              </Text>
            )} 
          </TouchableOpacity>

           {emailcheck && ( 
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'red'}}>Please Check Your Mail</Text>
            </View>
          )} 
        </View>
      </ActionSheet>
    </View>
  );
};

export default ForgotPassword;