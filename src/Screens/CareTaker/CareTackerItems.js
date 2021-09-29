import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
function CareTackerItems(props) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{height: vh(15), width: vw(24)}}>
          <ImageBackground
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: -6,
            }}
            resizeMode="cover"
            source={require('../../assets/care.png')}></ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text style={styles.main}>Asha Kiran Home</Text>
          <Text style={styles.alt}>Indira nagar 5th block Bangalore</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: vw(62),
              paddingRight: 5,
            }}>
            <Text style={styles.alt}>4.6 rating | 0.8km</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: vw(62),
              paddingRight: 5,
            }}>
            <Text style={styles.alt}>24/7 Care taking Services</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 2,
    borderColor: '#F3F6F6',
    borderRadius: 15,
    height: vh(15),
    justifyContent: 'center',
    overflow: 'hidden',
  },
  main: {
    fontSize: vf(2.5),
    fontWeight: 'bold',
  },
  alt: {fontSize: vf(1.5), marginTop: 2},
  alt1: {fontSize: vf(1.5), color: '#06112D', textAlign: 'center'},
  alt2: {
    fontSize: vf(1.5),
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#06112D',
    borderRadius: 10,
    padding: 2,
    width: vw(20),
    marginRight: 5,
  },
  btn1: {
    backgroundColor: '#06112D',
    borderRadius: 10,
    padding: 2,
    color: '#000',
    // width: 130,
    width: vw(38),
  },
});
export default CareTackerItems;
