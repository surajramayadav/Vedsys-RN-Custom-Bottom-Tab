import React, { createRef, useState } from 'react';
import ActionSheet from 'react-native-actions-sheet';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/MaterialIcons";
function Medicine(props) {
  const actionSheetRef = createRef();
  const [toggleActionSheet, setToggleActionSheet] = useState(false);
  const {handleActionSheet}= props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=> handleActionSheet()}>
        <View style={styles.imgcont}>
          <Image
            style={{
              height: "100%",
              width: "100%",
            }}
            resizeMode="cover"
            source={{
              uri: "https://image.cnbcfm.com/api/v1/image/106689818-1599150563582-musk.jpg?v=1620227840",
            }}
          />
        </View>
        <View
          style={{
            marginTop: vh(1),
            marginLeft: vh(2),
            width: vh(35.83),
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.txt}>Oxycodone</Text>
            <Text style={styles.txtalt}>20 Pills Left</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              alignContent: "space-between",
            }}
          >
            <View style={styles.label}>
              <Icon name="local-cafe" />
              <Text style={styles.labeltxt}>Before Breakfast</Text>
            </View>
            <View style={styles.label}>
              <Icon name="query-builder" />
              <Text style={styles.labeltxt}>6-7 am Approx</Text>
            </View>
            <View style={styles.label}>
              <Icon name="edit-off" />
              <Text style={styles.labeltxt}>1 Pill</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: vh(9.66),
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: vh(1.66),
    borderRadius: vw(2),
  },
  imgcont: { width: vh(10) },
  label: {
    backgroundColor: "#f3f6f6",
    flexDirection: "row",
    marginRight: vh(0.8),
    alignItems: "center",
    borderRadius: 2,
  },
  labeltxt: { fontSize: vh(1.3) },
  txt: { color: "#062816", fontSize: vh(3) },
  txtalt: { color: "#a4d46e", fontSize: vh(2), marginLeft: vh(1.8) },
});
export default Medicine;
