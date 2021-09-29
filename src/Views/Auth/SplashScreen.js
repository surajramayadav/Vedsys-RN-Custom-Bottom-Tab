import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
function SplashScreen({navigation}) {
  // const login = useSelector(state => state.login)
  // const { isLogged } = login
  let isLogged = true;
  setTimeout(() => {
    if (isLogged) {
      navigation.replace('Home');
    } else {
      navigation.replace('Splash');
    }
  }, 4000);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'#c6e5f7'}}>
        <Image
        resizeMode="center"
          source={require('../../Images/Vedsys-Logo.png')}
          style={{
            width: responsiveWidth(80),
            height: '100%',
            // animation: 'fadeIn 5s',
            // transition: '650ms ease',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  },
});
export default SplashScreen;
