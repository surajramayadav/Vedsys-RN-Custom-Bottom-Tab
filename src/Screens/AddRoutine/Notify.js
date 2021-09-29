import React from "react";
import { View, Text } from "react-native";

function Notify(props) {
  const { title } = props;
  return (
    <>
      <View
        style={{
          //   borderRadius: 50,
          //   borderWidth: 1,
          //   width: "28%",
          marginTop: 15,

          //
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "grey",
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "grey",
            paddingLeft: 18,
            paddingRight: 18,
            paddingVertical: 5,
          }}
        >
          {title}
        </Text>
      </View>
    </>
  );
}

export default Notify;
