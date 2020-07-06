import React, { Component } from "react";
import {Text,SafeAreaView, StyleSheet, View, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import images from '../assets/Images/images';
import VerticalText from 'react-native-vertical-text';
import { abs } from "react-native-reanimated";


export default class LandingScreen extends Component {



        render(){
            return(
                <>
                <StatusBar barStyle = "light-content"/>
                <View style = {styles.backgroundContainer}>
                    <Image source = {images.LandingBackground} style = {styles.backgroundImage}/> 
                    <View style = {styles.SanoContainer}>
                        <VerticalText text = {"SANO"} style = {styles.Sano}/>
                    </View>
                    {/* If the user presses sign up send them to the sign up navigator */}
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate("SignupNav")}} style = {styles.loginContainer}> 
                        <Text style = {{fontFamily: "IBM Plex Mono"}}> SIGN UP </Text>
                    </TouchableOpacity>

                    {/* we are already in the login navigator so if the user presses login just send them to the login page */}
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate("Login")}} style = {styles.signupContainer}> 
                        <Text style = {{fontFamily: "IBM Plex Mono", color: 'white', textDecorationLine: "underline", }}> LOG IN </Text>
                    </TouchableOpacity>

                </View> 
                </>                 
            );
        }

    
}


const styles = StyleSheet.create({

    backgroundImage: {
        position: 'absolute',
        opacity: 0.50,
        width: '100%',
        height: '100%',
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "column"
    },
    Sano: {
        fontFamily: 'Times New Roman',
        color: 'white',
        fontSize: 20,
        alignSelf:"center",
        marginTop: "5%"
    },
    SanoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: "47%",
        borderColor: 'white',
        borderWidth: 1, 
        height: 117,
        width: 40,
    },

    loginContainer: {
        backgroundColor: 'white',
        width: '60%',
        height: '6%',
        alignItems: "center",
        alignSelf: "center",
        marginTop: '40%',
        justifyContent: 'center'
    },

    signupContainer: {
        width: '60%',
        height: '6%',
        alignItems: "center",
        alignSelf: "center",
        marginTop: '5%',
        justifyContent: 'center'

    },

});