import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
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
import Header from '../../Component/Header/Header';
function FindDoctor(props) {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: vh(15), width: vw(24)}}>
            <ImageBackground
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode="cover"
              source={require("../../assets/Doctor.png")}></ImageBackground>
          </View>

          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.main}>Dr. Meka Satyanarayana</Text>
            <Text style={styles.alt}>General Physician. 11yrs exp</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: vw(62),
                paddingRight: 5,
              }}>
              <Text style={styles.alt}>Indira nagar 5th Block Bangalore</Text>
              <Text style={styles.alt}>0.8km</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: vw(62),
                paddingRight: 2,
                marginTop: 10,
              }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.alt1}>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1}>
                <Text style={styles.alt2}>Book Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: vh(15), width: vw(24)}}>
            <ImageBackground
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode="cover"
              source={require("../../assets/sonal.png")}></ImageBackground>
          </View>

          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.main}>Dr. Sonal Jain  </Text>
            <Text style={styles.alt}>ENT Specialist. 06yrs exp</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: vw(62),
                paddingRight: 5,
              }}>
              <Text style={styles.alt}>Indira nagar 5th Block Bangalore</Text>
              <Text style={styles.alt}>0.8km</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: vw(62),
                paddingRight: 2,
                marginTop: 10,
              }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.alt1}>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1}>
                <Text style={styles.alt2}>Book Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: vh(15), width: vw(24)}}>
            <ImageBackground
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode="cover"
              source={require("../../assets/Sarika.png")}></ImageBackground>
          </View>

          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.main}>Dr. Darika Samak</Text>
            <Text style={styles.alt}>Diabetis Specialist. 03yrs exp</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: vw(62),
                paddingRight: 5,
              }}>
              <Text style={styles.alt}>Indira nagar 5th Block Bangalore</Text>
              <Text style={styles.alt}>0.8km</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: vw(62),
                paddingRight: 2,
                marginTop: 10,
              }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.alt1}>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1}>
                <Text style={styles.alt2}>Book Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    fontSize: vf(2),
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
export default FindDoctor;
