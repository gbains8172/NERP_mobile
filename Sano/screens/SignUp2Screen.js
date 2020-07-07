import React, { Component } from "react";
import {Text,SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';

export default class SignUp2Screen extends Component {
    constructor(props){
        super(props);

        this.state = {
            phoneNumber: '',
            isLoading: false,
        }

        
    }

    // do something for login here. firebase?
    continuePressed = () => {

        //continue to next setup page
        this.props.navigation.navigate('Signup3');
        
    }

    // update text in login text field while typing
    updatePhoneNumber = phoneNumber => {
        this.setState({phoneNumber: phoneNumber});
    }

    render(){
        return ( 
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, }, androidSafeView.AndroidSafeArea}>

                <View style = {styles.topView}>
                    <View style = {styles.textContainer}>
                        <Text style = {{fontSize: 25, fontFamily: "IBM Plex Mono", }}>Finish Setting Up</Text>
                        <Text style = {{fontSize: 25, fontFamily: "IBM Plex Mono", }}>Your Account</Text>
                    </View>

                    <View style = {styles.inputContainer}>
                        <Text style = {styles.labelText}>ENTER PHONE NUMBER</Text>
                        <TextInput style = {styles.input}
                            placeholder = "Enter Here"
                            autoCapitalize="none"
                            onChangeText={this.updatePhoneNumber }
                            value={this.state.phoneNumber}
                            keyboardType = 'number-pad'
                        />
                    </View>

                </View>

                <View style = {styles.bottomView}>
                    <TouchableOpacity onPress = {this.continuePressed} style = {styles.continueContainer}> 
                        <Text style = {{fontFamily: "IBM Plex Mono", color: 'white'}}> CONTINUE </Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
            </>

        );
    }
}

const styles = StyleSheet.create({

    textContainer:{
        marginTop: '15%',  
        alignItems: "center"      
    },

    topView: {
        flex: 3,
        alignItems: "center",

    },

    bottomView: {
        flex: 2,
    },

    continueContainer: {
        backgroundColor: 'black',
        width: '60%',
        height: '12%',
        alignItems: "center",
        alignSelf: "center",
        marginTop: '10%',
        justifyContent: 'center',
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