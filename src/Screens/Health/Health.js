import React from 'react';
import { createRef, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Filter from 'react-native-vector-icons/MaterialCommunityIcons';
import Pill from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Component/Header/Header';

export default function Health({ navigation }) {
  return (
    <SafeAreaView>
      <Header navigation={navigation}/>
      <View>
        <Text style={styles.health}>Health</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          paddingLeft: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View style={styles.box}>
            <Pill
              name="pill"
              size={35}
              color="#50bcfc"
              style={{paddingTop: 10}}
            />
            <Text
              style={{
                color: '#50bcfc',
                marginTop: 5,
                fontSize: 11,
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              Pill Dispenser
            </Text>
          </View>
          </TouchableOpacity>
          <View style={{margin: 10}} />
          <View style={styles.box1}>
            <Filter
              name="stethoscope"
              size={32}
              color="#5226fb"
              style={{paddingTop: 10}}
            />
            <Text
              style={{
                color: '#7328fb',
                marginTop: 5,
                fontSize: 11,
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              Reports
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#cfeeff',
    // padding: 16,
    // marginTop:20,
    borderRadius: 15,
    alignItems: 'center',
    width: 90,
    height: 95,
    borderWidth: 1,
    borderColor: '#f3f6f9',
  },
  box1: {
    backgroundColor: '#d7c9fe',
    // padding: 16,
    // marginTop:20,
    borderRadius: 15,
    alignItems: 'center',
    width: 90,
    height: 95,
    borderWidth: 1,
    borderColor: '#f3f6f9',
  },
  health: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft:20,
    paddingTop:20,

  },
});
