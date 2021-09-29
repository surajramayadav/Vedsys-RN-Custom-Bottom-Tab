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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Prescribe from '../../Component/Prescribe';
import PrescriptionButton from '../../Component/PrescriptionButton';

const actionSheetRef = createRef();

const Prescription = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              actionSheetRef.current?.setModalVisible();
            }}>
            <Text style={{marginTop: 50}}>Prescription ActionSheet</Text>
          </TouchableOpacity>

          <ActionSheet ref={actionSheetRef}>
            <View style={{margin: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <Text style={{fontWeight: 'bold'}}>Prescription</Text>
                <Icon name="close" color="#9ba0ab" size={20} />
              </View>
              <View>
                <Text style={{margin: 5, fontWeight: 'bold'}}>Name</Text>
                <Text style={{color: 'grey', marginTop: 5}}>Patient Name</Text>
                <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
                  Ariana Stark
                </Text>
              </View>

              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <View>
                  <Text style={{color: 'grey'}}>Age</Text>
                  <Text style={{fontWeight: 'bold'}}>58</Text>
                </View>
                <View style={{marginLeft: 65}}>
                  <Text style={{color: 'grey'}}>Gender</Text>
                  <Text style={{fontWeight: 'bold'}}>Female</Text>
                </View>
              </View>
              <View>
                <Text style={{color: 'grey'}}>Doctor Name </Text>
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                  Meka Satyanarayana
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                  Medications
                </Text>
              </View>
              <Prescribe />
            </View>
            <View>
               <PrescriptionButton />
            </View>
          </ActionSheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Prescription;
