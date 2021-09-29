import ActionSheet from "react-native-actions-sheet";
import React, { createRef } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Cross from 'react-native-vector-icons/Entypo';
import Horizontal from 'react-native-vector-icons/MaterialIcons';


const actionSheetRef = createRef();

const MorePrescription = () => {
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
          borderRadius: 40,
        }}>
          <View style={{alignItems:'center'}}>
            <Horizontal name="horizontal-rule" size={40} />
          </View>
        <View style={{padding:30}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>More</Text>
                <TouchableOpacity>
                    <Cross name="cross" size={25} />
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:'normal',marginTop:10}}>Prescription</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:'normal',marginTop:10}}>Pill Report</Text>
            </TouchableOpacity>
            </View>
        </View>
      </ActionSheet>
    </View>
  );
};

export default MorePrescription;
