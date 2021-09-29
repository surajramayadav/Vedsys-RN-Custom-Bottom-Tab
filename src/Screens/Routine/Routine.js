import React, {createRef, useState} from 'react';
import Filter from 'react-native-vector-icons/MaterialIcons';
import ActionSheet from 'react-native-actions-sheet';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {DebugInstructions} from 'react-native/Libraries/NewAppScreen';
import Header from '../../Component/Header/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QuestionTwo from '../../Component/QuestionTwo';
import AddRoutine from '../AddRoutine/AddRoutine';

const actionSheetRef = createRef();

const Routine = ({navigation, route}) => {
  const [toggleActionSheet, setToggleActionSheet] = useState();
  const AddRoutine = () => {
    console.log('go to AddRoutine');
    setToggleActionSheet(9);
    actionSheetRef.current?.setModalVisible();
  };
  return (
    <SafeAreaView>
      <Header />
      <View>
        <View>
          <View style={{height: '50%'}}>
            <View style={styles.flexbox}>
              <View>
                <Text style={styles.routine}>Routine</Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.header}>Today</Text>

                <TouchableOpacity onPress={AddRoutine}>
                  <Filter name="filter-alt" size={20} color="dark-black" />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                style={styles.progress}
                source={require('../../Images/progressBarWhite.png')}
              />
              <Image
                style={styles.tinyLogo}
                source={require('../../Images/progress1.png')}
              />
              <View style={styles.imgview}>
                <Image
                  style={styles.tinyLogo1}
                  source={require('../../Images/cardiogram.png')}
                />

                <Text style={styles.today}>Today</Text>
                <Image
                  style={styles.tinyLogo2}
                  source={require('../../Images/Ellipse.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.dumble}
                source={require('../../Images/dumble.png')}
              />
              <View style={{paddingLeft: 15}}>
                <Text style={styles.subhead}>45m</Text>
                <Text style={{fontSize: 10, color: '#d7dcd9'}}>
                  Yesterday 1h
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.dumble}
                source={require('../../Images/walk.png')}
              />
              <View style={{paddingLeft: 15}}>
                <Text style={styles.subhead}>1h 45m</Text>
                <Text style={{fontSize: 10, color: '#d7dcd9'}}>
                  Yesterday 1h 35m
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
              marginTop: 30,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.dumble}
                source={require('../../Images/case.png')}
              />
              <View style={{paddingLeft: 15}}>
                <Text style={styles.subhead}>8h 45m</Text>
                <Text style={{fontSize: 10, color: '#d7dcd9'}}>
                  Yesterday 1h
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.dumble}
                source={require('../../Images/sleep.png')}
              />
              <View style={{paddingLeft: 15}}>
                <Text style={styles.subhead}>7h 45m</Text>
                <Text style={{fontSize: 10, color: '#d7dcd9'}}>
                  Yesterday 1h 35m
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {toggleActionSheet == 9 && (
        <AddRoutine
          toggleState={toggleActionSheet}
          setToggleActionSheet={setToggleActionSheet}
          navigation={navigation}
          route={route}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  routine: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  rightContainer: {
    flexDirection: 'row',
  },

  header: {
    paddingRight: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  today: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'grey',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    position: 'relative',
    top: -170,
  },
  progress: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },

  imgview: {
    backgroundColor: '#f2f3f7',
    borderRadius: 100,
    padding: 10,
    borderColor: '#f2f3f7',
    borderWidth: 3,
    marginTop: 20,
    width: 75,
    height: 75,
    alignSelf: 'center',
    position: 'relative',
    top: -305,
  },
  tinyLogo1: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    resizeMode: 'cover',
    backgroundColor: '#f2f3f7',
    // borderColor: 'grey',
    padding: 10,
    alignSelf: 'center',
  },
  tinyLogo2: {
    width: 100,
    height: 100,
    position: 'relative',
    top: -70,
    left: -25,
  },

  circle: {
    // backgroundColor: 'red',
  },

  dumble: {
    width: 50,
    height: 50,
  },
  subhead: {
    fontWeight: 'bold',
  },
});

export default Routine;
