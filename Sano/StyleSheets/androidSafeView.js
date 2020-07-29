import { StyleSheet, Platform, StatusBar } from "react-native";

const androidSafeView = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: 'white'
  }
})

export default androidSafeView;