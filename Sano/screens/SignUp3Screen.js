import React, { Component } from "react";
import {Text,SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';

export default class SignUp3Screen extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            isLoading: false,
        }

        
    }

    // do something for login here. firebase?
    continuePressed = () => {
        alert('continue Pressed');

        //continue to next setup page
        this.props.navigation.navigate('Onboarding1');
        
    }

    // update text in login text field while typing
    updateUsername = username => {
        this.setState({username: username});
    }

    render(){
        return ( 
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, }, androidSafeView.AndroidSafeArea}>

                <View style = {styles.topView}>
                    <View style = {styles.textContainer}>
                        <Text style = {{fontSize: 25, fontFamily: "Times New Roman", }}>Finish Setting Up</Text>
                        <Text style = {{fontSize: 25, fontFamily: "Times New Roman", }}>Your Account</Text>
                    </View>

                    <View style = {styles.inputContainer}>
                        <Text style = {styles.labelText}>CHOOSE A USERNAME</Text>
                        <TextInput style = {styles.input}
                            placeholder = "Enter Here"
                            autoCapitalize="none"
                            onChangeText={this.updateUsername }
                            value={this.state.username}
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
        flex: 2,
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