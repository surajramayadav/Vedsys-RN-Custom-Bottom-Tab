/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Filter from 'react-native-vector-icons/MaterialCommunityIcons';
import Pill from 'react-native-vector-icons/MaterialCommunityIcons';
import Hand from 'react-native-vector-icons/FontAwesome5';
import Spoon from 'react-native-vector-icons/MaterialCommunityIcons';
import Grocery from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from '../../Component/Header/Header';

const Services = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', padding: 20}}>
            Services
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => navigation.navigate('FindDoctor')}>
            <View
              style={{
                backgroundColor: '#d6ccfe',
                padding: 16,
                borderRadius: 15,
                alignItems: 'center',
                height: 100,
                width: 105,
              }}>
              <Filter name="stethoscope" size={32} color="#5226fb" />
              <Text style={{color: '#5226fb', marginTop: 5}}>Doctor</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FindMedicine')}>
            <View
              style={{
                backgroundColor: '#ceefff',
                padding: 10,
                borderRadius: 15,
                alignItems: 'center',
                height: 100,
                width: 105,
              }}>
              <Pill name="pill" size={32} color="#2cb9fd" />
              <Text style={{color: '#34bcfd', marginTop: 10}}>Pharmacy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CareTacker')}>
            <View
              style={{
                backgroundColor: '#dff0cc',
                padding: 16,
                borderRadius: 15,
                alignItems: 'center',
                height: 100,
                width: 105,
              }}>
              <Hand name="hand-holding-heart" size={32} color="#abd879" />
              <Text style={{color: '#abd879', marginTop: 10}}>careTaker</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingLeft: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('FoodServices')}>
            <View
              style={{
                backgroundColor: '#fef4d7',
                padding: 16,
                borderRadius: 15,
                alignItems: 'center',
                height: 100,
                width: 105,
              }}>
              <Filter name="silverware-fork-knife" size={32} color="#fcc836" />
              <Text style={{color: '#fcc836', marginTop: 10}}>Food</Text>
            </View>
          </TouchableOpacity>
          <View style={{paddingLeft: 15}} />
          <TouchableOpacity onPress={() => navigation.navigate('Grocery')}>
            <View
              style={{
                backgroundColor: '#ffbbbc',
                padding: 16,
                borderRadius: 15,
                alignItems: 'center',
                height: 100,
                width: 105,
              }}>
              <Grocery name="local-grocery-store" size={32} color="#ff696a" />
              <Text style={{color: '#ff696a', marginTop: 10}}>Groceries</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Services;
