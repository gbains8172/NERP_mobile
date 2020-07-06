import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import images from './assets/Images/images';
import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoadingComplete: false,
    };
  }

  async componentDidMount(){
    imagesArr = []
    for (var key in images){
      imagesArr.push(images[key])
    }
    await Promise.all([
      Asset.loadAsync(imagesArr),
      Font.loadAsync({
        'IBM Plex Mono': require('./assets/Fonts/IBMPlexMono-Regular.ttf')
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
