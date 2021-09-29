import ActionSheet from 'react-native-actions-sheet';
import React, {createRef} from 'react';
import Dash from 'react-native-vector-icons/Octicons';

import {
  ScrollView,
  ScrollViewBase,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Actionsheet = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Dash name="dash" size={50} style={{}} />
        </TouchableOpacity>
      </View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator
        persistentScrollbar={true}
        style={{height: '60%'}}>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 16,
              color: '#9CD161',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            Today
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            Yesterday
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            This week (Sun -Today)
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            Last 7 days
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            Last Week (Sun - Sat)
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            Last 14 days
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            This Month
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            Last 30 Days
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            Last Month
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#062816',
              margin: 2,
              marginTop: 3,
              marginBottom: 3,
            }}>
            All Time
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Actionsheet;
