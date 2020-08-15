import React, { Component } from "react";
import {Text,SafeAreaView, StatusBar} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import SpanFont from '../StyleSheets/font'


export default class AlertScreen extends Component {

    render(){
        return(
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, }, androidSafeView.AndroidSafeArea}>
                <Text>Alert Screen</Text>
            </SafeAreaView>
            </>

        );
    }
    
}