import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from "react-native-responsive-dimensions";
import FindMedicineItems from "./FindMedicineItems";
import Header from "../../Component/Header/Header";

function FindMedicine(props) {
  return (
    <SafeAreaView>
        <Header />
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={{ fontSize: vf(3), fontWeight: "bold" }}>
            Find Your Medicines
          </Text>
          <Icon name="filter-alt" size={30} color="#000" />
        </View>
        <View style={styles.list}>
          <FindMedicineItems />
          <FindMedicineItems />
          <FindMedicineItems />
          <FindMedicineItems />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { margin: 10, marginTop: 30 },
  upper: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  list: {},
});
export default FindMedicine;
