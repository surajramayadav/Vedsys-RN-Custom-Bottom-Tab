import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  responsiveHeight ,
  responsiveWidth ,
  responsiveFontSize ,
} from "react-native-responsive-dimensions";

function Sc(props) {
  return (
    <View style={styles.container}>
      <Text>Walk</Text>
     <View style={{marginTop:15}}>
      <Image
        style={{
          height: responsiveHeight(13.16),
          width: responsiveWidth(25.16),
          borderWidth: (6.5),
          borderColor: "gold",
          borderRadius: 80,
          alignSelf: "center",
          
        }}
        resizeMode="cover"
        source={{
          uri: "https://image.cnbcfm.com/api/v1/image/106689818-1599150563582-musk.jpg?v=1620227840",
        }}
      />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: responsiveHeight(22.5),
    width: responsiveWidth(44),
    // borderRadius: vw(10),
    padding: (1),
    borderWidth:1,
    borderColor:"#f5f5f5",
    borderRadius:10,
    elevation:1,
    // justifyContent: 'center'

  },
});
export default Sc;
