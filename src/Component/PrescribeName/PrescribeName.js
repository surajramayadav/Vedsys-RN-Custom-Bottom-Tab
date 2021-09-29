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
  CheckBox,
  ImageBackground,
  FlatList,
} from 'react-native';
import Filter from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Feather';
const actionSheetRef = createRef();
const PrescribeTab = [
  {
    id: 1,
    name: 'Prescription Name',
    date: 'Uploaded on Wed, Mar 17',
    // img1: 'source={require('../../Images/11.png')}',
  },
  {
    id: 2,
    name: 'Prescription Name',
    date: 'Uploaded on Wed, Mar 17',
    // img: './Images/PlacementArea-29.png',
  },
  {
    id: 3,
    name: 'Prescription Name',
    date: 'Uploaded on Wed, Mar 17',
    // img: './Images/PlacementArea-29.png',
  },
];
const PrescribeName = () => {
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
        }}>
        <Text>Open ActionSheet</Text>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          backgroundColor: '#FFFFFF',
          width: 390,
          height: 407,
          borderRadius: 30,
        }}>
        <View style={{padding:10}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins',
              color: '#062816',
              fontWeight: '100',
              padding: 10,
              marginLeft: 20,
            }}>
            Prescription
          </Text>
          <View style={{alignItems: 'flex-end', right: 20, top: -40}}>
            <Filter name="close" size={25} color={'#707070'} />
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 40,
              borderWidth: 1.5,
              borderColor: '#9CD161',
              height: 29,
              width: 75,
              position: 'absolute',
              right: 30,
              top: 50,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 3,
                fontSize: 14,
                fontFamily: 'Poppins',
                color: '#9CD161',
                fontWeight:'bold'
              }}>
              + Add
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 20}}></View>
          <FlatList
            data={PrescribeTab}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{paddingTop: 20}}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  margin: 5,
                  borderWidth: 1,
                  height: 65,
                  width: 350,
                  borderColor: '#f2f3f7',
                  borderRadius: 10,
                  marginLeft: 20,
                }}>
                <View style={{paddingRight: 5}}>
                  <Image
                    source={require('../../Images/PlacementArea-29.png')}></Image>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#062816',
                      padding: 5,
                      fontFamily: 'Poppins',
                      fontSize: 16,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: '#062816',
                      padding: 5,
                      fontFamily: 'Poppins',
                      fontSize: 10,
                    }}>
                    {item.date}
                  </Text>
                  <View style={{position: 'absolute', top: 20, right: -100}}>
                    <Icon name="trash" size={25} color={'#707070'} />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ActionSheet>
    </View>
  );
};

export default PrescribeName;
