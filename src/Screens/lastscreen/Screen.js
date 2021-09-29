import React, { createRef, useState } from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {
  Image,
  SafeAreaView,
  ScrollView,
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Event from './Event';
import Medicine from './Medicine';
import Sc from './Sc';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu from 'react-native-vector-icons/Entypo';
import Mic from 'react-native-vector-icons/Feather';
import Notifications from 'react-native-vector-icons/Ionicons';

import Banner from './Banner/Banner'
import { useNavigation } from '@react-navigation/native';
import MedicineView from './MedicineView';
import Actionsheet from '../../Views/Auth/Actionsheet';
import Header from '../../Component/Header/Header';

function Screen({ navigation, route }) {
  const actionSheetRef = createRef();
  const handleActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const actionSheetSchedule = createRef();
  const handleActionSheetSchedule = () => {
    actionSheetSchedule.current?.setModalVisible();
  };

  return (
    <SafeAreaView>
      <Header navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: vw(1.6),
            justifyContent: 'space-between',
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=>handleActionSheetSchedule()}>
              <Text style={styles.text}>Jun 6, 2021</Text>
            </TouchableOpacity>
            <Icon name="arrow-drop-down" size={35} />
          </View>
          {/* <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Account name="account" size={40} />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={{alignItems: 'center'}}> 
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: vh(1.5), marginBottom: vh(1.6) }}>
              <Sc />
            </View>
            <View>
              <Sc />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: vh(1.5), marginBottom: vh(1.6) }}>
              <Sc />
            </View>
            <View>
              <Sc />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text}>Upcoming Medicine</Text>
          <Medicine handleActionSheet={handleActionSheet} />
          <Medicine handleActionSheet={handleActionSheet} />
          <Medicine handleActionSheet={handleActionSheet} />
        
        
        </View>
        <View style={{marginBottom: 90}}>
        <Banner  />
          </View>
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 30, marginBottom: 30 }}>
          <View style={{marginBottom: 90}}>
            <Image
              source={require('../../Images/Scroll-Group-12.png')}
              style={{ width: 300, borderRadius: 10, height: 130 }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
            }}>
            <Image
              source={require('../../Images/Scroll-Group-12.png')}
              style={{ width: 300, borderRadius: 10, height: 130 }}
            />
          </View>
          
        </ScrollView> */}
        
      </ScrollView>
      <ActionSheet ref={actionSheetRef}>
        <MedicineView />
      </ActionSheet>
      <ActionSheet ref={actionSheetSchedule}>
        <Actionsheet />
      </ActionSheet>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { padding: vh(2) },
  text: { fontSize: vh(3), marginBottom: vh(1) },
});
export default Screen;
