/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import MapView from "react-native-maps";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const Map = ({ latitude, longitude }) => {
  return (
    <MapView
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...StyleSheet.absoluteFillObject
      }}
      scrollEnabled={false}
      showsScale={true}
      showsCompass={true}
      cacheEnabled={true}
      moveOnMarkerPress={true}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  );
};
export default class App extends Component<{}> {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={[styles.slide, { backgroundColor: "#9DD6EB" }]}>
          <Map latitude={12.9716} longitude={77.5946} />
        </View>
        <View style={[styles.slide, { backgroundColor: "#97CAE5" }]}>
          <Map latitude={50.39958} longitude={8.070732} />
        </View>
        <View style={[styles.slide, { backgroundColor: "#92BBD9" }]}>
          <Map latitude={37.78825} longitude={-122.4324} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black"
  }
});
