import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Images from './assets/Images/Images';
import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoadingComplete: false,
    };
  }

  async componentDidMount(){
    ImagesArr = []
    for (var key in Images){
      ImagesArr.push(Images[key])
    }
    await Promise.all([
      Asset.loadAsync(ImagesArr),
      Font.loadAsync({
        'IBM Plex Mono': require('./assets/Fonts/IBMPlexMono-Regular.ttf'),
        'Times New Roman': require('./assets/Fonts/timesNewRoman.ttf'),
      })
    ])
    this.setState({ isLoadingComplete: true });
  };



  render(){
    console.disableYellowBox = true; 
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading/>
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <AppNavigator />
        </View>
      );
    }
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
