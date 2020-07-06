import React, { Component } from "react";
import {Text,SafeAreaView} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';


export default class LoginScreen extends Component {

    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor:'white',}, androidSafeView.AndroidSafeArea}>
            <Text>Login</Text>
            </SafeAreaView>

        );
    }
}