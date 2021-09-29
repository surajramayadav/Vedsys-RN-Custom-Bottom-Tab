import React from "react";
import { View, Text } from "react-native";

function WeekDays(props) {
  const { day } = props;
  return (
    <>
      <View
        style={{
          //   borderRadius: 50,
          //   borderWidth: 1,
          width: "11%",
          marginTop: 15,
          //   backgroundColor:'red'
        }}
      >
        <Text
          style={{
            padding: 5,
            textAlign: "center",
            color: "grey",
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "grey",
          }}
        >
          {day}
        </Text>
      </View>
    </>
  );
}

export default WeekDays;
