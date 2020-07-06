import React, { Component } from "react";
import {Text,SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';

export default class SignUp1Screen extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            password: '',
            loginText: '',
            isLoading: false,
        }

        
    }

    // do something for login here. firebase?
    signupPressed = () => {
        alert('SignUp Pressed');
        this.props.navigation.navigate('Signup2');
        //create a Mainnav and redirect there
        
    }

    // update text in login text field while typing
    updateLoginText = loginText => {
        this.setState({loginText: loginText});
    }
    updatePassword = password => {
        this.setState({password: password});
    }


    render(){
        return(
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, }, androidSafeView.AndroidSafeArea}>

                <View style = {styles.topView}>
                    <View style = {styles.loginTextContainer}>
                        <Text style = {{fontSize: 25, fontFamily: "Times New Roman", }}>Sign Up</Text>
                    </View>

                    <View style = {styles.inputContainer}>
                        <Text style = {styles.labelText}>Email</Text>
                        <TextInput style = {styles.input}
                            placeholder = "Enter Here"
                            autoCapitalize="none"
                            onChangeText={this.updateLoginText }
                            value={this.state.loginText}
                            keyboardType = 'email-address'

                        />
                    </View>

                    <View style = {styles.inputContainer}>
                        <Text style = {styles.labelText}>PASSWORD</Text>
                        <TextInput style = {styles.input}
                            placeholder = "Enter Password" secureTextEntry
                            onChangeText={this.updatePassword}
                            value={this.state.password}
                        />
                    </View>
                </View>
                <View style = {styles.bottomView}>

                    <TouchableOpacity onPress = {this.signupPressed} style = {styles.loginContainer}> 
                        <Text style = {{fontFamily: "IBM Plex Mono", color: 'white'}}> SIGN UP </Text>
                    </TouchableOpacity>
                    <View style = {styles.newContainer}>
                        <Text style = {{fontFamily: "IBM Plex Mono", color: 'black', fontSize: 10 }}> ALREADY HAVE AN ACCOUNT? </Text>
                    </View>
                    {/* we are already in the login navigator so if the user presses login just send them to the login page */}
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate("Login")}} style = {styles.signupContainer}> 
                        <Text style = {{fontFamily: "IBM Plex Mono", color: 'black', textDecorationLine: "underline", fontSize: 15}}> LOG IN </Text>
                    </TouchableOpacity>
                </View>


        </SafeAreaView>
        </>

        );
    }
}

const styles = StyleSheet.create({

    loginTextContainer:{
        marginTop: '15%'        
    },

    topView: {
        flex: 2,
        alignItems: "center",

    },

    bottomView: {
        flex: 2,
    },

    loginContainer: {
        backgroundColor: 'black',
        width: '60%',
        height: '12%',
        alignItems: "center",
        alignSelf: "center",
        marginTop: '10%',
        justifyContent: 'center',
    },

    signupContainer: {
        width: '60%',
        height: '6%',
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center',
    },

    newContainer: {
        width: '60%',
        height: '3%',
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: '30%',
    },

    inputContainer: {
        marginTop: '10%',
        width: '80%'
    },

    input: {
        marginTop: '10%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: '5%',
        fontFamily: "IBM Plex Mono", 

    },
    labelText: {
       fontFamily: "IBM Plex Mono", 
       fontSize: 15,
    },
});