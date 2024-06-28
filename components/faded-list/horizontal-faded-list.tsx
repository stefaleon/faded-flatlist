import React from "react";
import { SafeAreaView, View, StyleSheet, ImageBackground } from "react-native";
import MaskedView from "../masked-view/masked-view";
import HorizontalFlatList from "../flat-list/horizontal-flat-list";
import HorizontalMaskedElement from "../masked-element/horizontal-masked-element";

export default () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require("../../assets/images/colors.png")}
      style={styles.image}
    >
      <View style={{ height: 300 }}>
        <MaskedView element={<HorizontalMaskedElement />}>
          <HorizontalFlatList />
        </MaskedView>
      </View>
    </ImageBackground>
  </SafeAreaView>
);
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
