import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet } from "react-native";

export default () => (
  <View style={{ backgroundColor: "transparent", flex: 1 }}>
    <LinearGradient
      colors={["#FFFFFF00", "#FFFFFF", "#FFFFFF00"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}      
    ></LinearGradient>
  </View>
);

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: "100%",
    borderRadius: 5,
  },
});
