import React, { Component } from "react";
import {Text,SafeAreaView, StatusBar, StyleSheet, View, Image, Dimensions, TextComponent} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import SpanFont from '../StyleSheets/font'
import Images from "../assets/Images/Images";
import SegmentedControlTab from "react-native-segmented-control-tab";





export default class ProfileScreen extends Component {

    constructor(props){
        super(props);

        //let shared = User.getUser();


        
    }

    

    render(){
        return(
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, }, androidSafeView.AndroidSafeArea}>

                <View style = {styles.topView}>
                    <View style = {styles.header}>
                        <Image source = {Images.tempProfileImage} style = {styles.profileImage}/>
                        <View>
                            {/* Grab Name!! */}
                            <Text style = {styles.name}> Gavin Bains</Text>
                            
                            {/* Grab userName!! */}
                            <Text style = {styles.userName}>@theBane </Text>
                        </View>

                        {/* Does this bell Do anything??? */}
                        <Image source = {Images.notification} style = {styles.notification}/>
                    </View>

                    {/* Get The Bio From API */}
                    <View style = {styles.bio}>
                        <Text style = {styles.bioText}>You merely adopted the dark. I was born in it, molded by it.</Text>
                    </View>
                </View>

                <View style = {styles.bottomView}>

                </View>

            </SafeAreaView>
            </>
        );
    }
}


const styles = StyleSheet.create({
    topView: {
        flex: 1,
    },
    bottomView: {
        flex: 3,

    },
    profileImage: {
        width: '20%', 
        height: '70%',
        resizeMode: 'contain',
        borderRadius: Dimensions.get('window').width / 2,
        marginLeft: '3%',
    },
    header: {
        flexDirection: "row",
        width: '100%',
        height: '50%',
    },
    name: {
        fontFamily: SpanFont.Span.fontFamily,
        fontSize: 23
    },
    userName: {
        fontFamily: "IBM Plex Mono",
        opacity: 0.5,
        marginLeft: 8,
    },
    notification: {
        // height: '25%',
        // width: '5%',
        height: 17,
        width: 14,
        marginLeft: '35%',        
    },
    bio: {
        width: '55%',
        marginLeft: '6%',
        fontFamily: "IBM Plex Mono"
    }, 
    bioText: {
        fontFamily: "IBM Plex Mono",
        fontSize: 12, 

    },

});