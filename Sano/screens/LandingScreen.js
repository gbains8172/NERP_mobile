import React, { Component } from "react";
import {Text,SafeAreaView, StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import images from '../assets/Images/images';
import VerticalText from 'react-native-vertical-text';


export default class LandingScreen extends Component {

        render(){
            return(
                <ImageBackground source = {images.LandingBackground} style = {styles.backgroundImage}> 
                    <VerticalText text = {"SANO"}/>
                </ImageBackground>
            );
        }

    
}


const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },

});