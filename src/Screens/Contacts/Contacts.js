import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet,Image } from "react-native";
// import Modal from "react-native-modal";
import Modal from "react-native-modal"

import {
  responsiveHeight as rH,
  responsiveWidth as rW,
  responsiveFontSize as rF,
} from "react-native-responsive-dimensions";

function Contacts() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible} style={{alignItems:"center"}}>
        <View style={styles.found}>
            <Image source={require('../../assets/agenda.png')} style={{marginBottom:20}}/>
          <Text style={{fontSize:rF(3), marginBottom:5,color:"#003366",fontWeight: 'bold'}}>Allow your contacts</Text>
          <Text style={{color:"#003366"}}>
            We Need these permissions to give 
          </Text>
          <Text style={{marginBottom:25,color:"#003366"}}>you better user experience</Text>
          <TouchableOpacity  onPress={toggleModal}  style={{justifyContent:'center',height:rH(7)}}>
            <Text style={styles.btn}>Sure I'd Like that</Text>
          </TouchableOpacity>
          <Text onPress={toggleModal} style={{color:"#003366"}}>Not Now</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor:'#003366',
    // height:rH(5),
    borderWidth: 1,
    width: 138,
    borderRadius: 20,
    textAlign:"center",
    // justifyContent: 'center',
    marginBottom:18,
    padding:7,
    color:"white"
  },
  found:{
     height:rH(40),
     width:rW(80),
     backgroundColor: "white",
     borderRadius:25,
     alignItems:'center',
     padding:"10%"
  }
});

export default Contacts;
