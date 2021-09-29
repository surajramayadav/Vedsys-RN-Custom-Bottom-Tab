import ActionSheet from "react-native-actions-sheet";
import { RadioButton } from "react-native-paper";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { createRef } from "react";
import { Input } from "react-native-elements";
import { FlatList } from "react-native";
import { Image } from "react-native";
import WeekDays from "./WeekDays";
import Notify from "./Notify";

const actionSheetRef = createRef();

const AddRoutine = () => {
  // let actionSheet;
  const [checked, setChecked] = React.useState("");

  return (
    
    <>
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
      >
        <Text>Open ActionSheet</Text>
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef}>
        <View style={{ padding: 15 }}>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontWeight: "bold" }}>Add Routine</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>X</Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View>
                <Input placeholder="Enter Action" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "baseline",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    Duration
                  </Text>
                </View>
                <View style={{ width: "40%" }}>
                  <Input placeholder="Hours" />
                </View>
                <View style={{ width: "40%" }}>
                  <Input placeholder="Minutes" />
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Choose Day:</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <WeekDays day="S" />
                  <WeekDays day="M" />
                  <WeekDays day="T" />
                  <WeekDays day="W" />
                  <WeekDays day="TH" />
                  <WeekDays day="F" />
                  <WeekDays day="SA" />
                </View>
                <View
                  style={{
                    marginLeft: -5,
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <RadioButton
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                  <Text style={{ paddingLeft: 5, fontWeight: "bold" }}>
                    Repeat every week
                  </Text>
                </View>
                <View>
                  <Input placeholder="Add Location" />
                </View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Notification:</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Notify title="Beeps" />
                    <View style={{ paddingLeft: 16 }}></View>
                    <Notify title="Bells" />
                    <View style={{ paddingLeft: 16 }}></View>
                    <Notify title="Digital" />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ paddingHorizontal: 25 }}></View>
                    <Notify title="Disco" />
                    <View style={{ paddingLeft: 16 }}></View>
                    <Notify title="None" />
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>Your Next Routine:</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Notify title="Wed,Mar 17" />
                    <View style={{ paddingLeft: 16 }}></View>
                    <Notify title="Wed,Mar 17" />
                    {/* <View style={{paddingLeft:16}}></View> */}
                    {/* <Notify title="Wed,Mar 17" /> */}
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ paddingHorizontal: 25 }}></View>
                    <Notify title="Wed,Mar 17" />
                    <View style={{ paddingLeft: 16 }}></View>
                    <Notify title="Wed,Mar 17" />
                  </View>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  backgroundColor: "#000080",
                  padding: 10,
                  width:'30%',
                  borderRadius:25
                }}
                // onPress={onPress}
              >
                <Text style={{textAlign:'center',color:'#fff'}}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
       
      {/* </ActionSheet> */}</ActionSheet>
    </>
  );
};

export default AddRoutine;
