import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/MaterialIcons";
function ViewDoctor(props) {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../../assets/Line.png")}
        style={{
          position: "absolute",
          top: vh(0.5),
          right: vw(45),
          width: vh(4.66),
          height: vh(0.7),
        }}
        resizeMode="contain"
      /> */}
      <View style={{ position: "absolute", marginTop: vh(1), right: 10 }}>
        <Icon name="close" size={25} />
      </View>
      <View style={styles.main}>
        <Image
          source={require("../../assets/Doctor.png")}
          resizeMode="contain"
          style={styles.img}
        />

        <View style={styles.txtMain}>
          <Text
            style={{
              fontSize: vf(2.3),
              fontWeight: "bold",
            }}
          >
            Dr. Meka Satyanarayana
          </Text>
          <Text style={{ fontSize: vf(1.5), fontWeight: "bold" }}>
            4.5 Rating
          </Text>
          <Text style={styles.txt}>General Physician</Text>
          <Text style={styles.txt}>11years experience</Text>
          <Text style={styles.txt1}>
            ABC Clinic, Indira nagar 5th Block Bangalore
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: vf(2.3),
            fontWeight: "bold",
            marginTop: vh(1.5),
          }}
        >
          Reviews
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>John Doe | 4.5 Rating</Text>
        <Text style={{ fontSize: vf(1.4) }}>
          Your Practice is great. The services you provide are incredible and
          the patient experience you provide is like nothing else.
        </Text>
        <Text style={{ fontWeight: "bold" }}>Like | Dislike</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>John Doe | 4.5 Rating</Text>
        <Text style={{ fontSize: vf(1.4) }}>
          Your Practice is great. The services you provide are incredible and
          the patient experience you provide is like nothing else.
        </Text>
        <Text style={{ fontWeight: "bold" }}>Like | Dislike</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Book Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    height: vh(4.33),
    width: vh(24.16),
    backgroundColor: "#06112d",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: vh(1.66),
    borderRadius: vw(4),
  },
  container: {
    backgroundColor: "#fff",
    width: vw(100),
    height: vh(49.16),
    borderTopLeftRadius: vw(6),
    borderTopRightRadius: vw(6),
    paddingHorizontal: vh(2.66),
    paddingTop: vh(3.33),
  },
  img: { height: vh(16.16), width: vh(12.33) },
  main: { flexDirection: "row" },
  txt: { fontSize: vf(1.6) },
  txt1: { fontSize: vf(1.6), width: 250 },
  txtMain: { marginLeft: vh(1.66), marginTop: 0 },
});
export default ViewDoctor;
