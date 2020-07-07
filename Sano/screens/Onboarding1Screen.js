import React, { Component } from "react";
import {Text,SafeAreaView, FlatList, StyleSheet, View, Image, TouchableOpacity, TextInput, StatusBar, Dimensions } from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import { SearchBar } from 'react-native-elements';

import images from '../assets/Images/images';
import { color } from "react-native-reanimated";


export default class Onboarding1Screen extends Component {

    constructor(props){
        super(props);

        // later we will be grabbing this array from somewhere
        this.state = {
            brandsArray:[ 
                    { 
                        id: 0,
                        brand: 'Addidas', 
                        selected : false,
                    }, 
                    { 
                        id: 1,
                        brand: 'Nike', 
                        selected : false,
                    },                 
                    { 
                        id: 2,
                        brand: 'Georgio Armani', 
                        selected : false,
                    },                 
                    { 
                        id: 3,
                        brand: 'Under Armour', 
                        selected : false,
                    },                 
                    { 
                        id: 4,
                        brand: 'Ralph Lauren', 
                        selected : false,
                    },                 
                    { 
                        id: 5,
                        brand: 'Chanel', 
                        selected : false,
                    }, 
                ],
            searchTerm: '',
            isloading: false,
        };

    }
    // update text in login text field while typing
    updateSearchTerm = searchTerm => {
        this.setState({searchTerm: searchTerm});
    }

    brandPressed = selectedbrand => {
        var tempArray = this.state.brandsArray;
        tempArray[selectedbrand.id].selected = !tempArray[selectedbrand.id].selected;
        this.setState({brandsArray: tempArray});
      }

    render(){
        return(

            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, }, androidSafeView.AndroidSafeArea}>
                <View style = {styles.topView}>
                    <Text style = {{FontFamily:"IBM Plex Mono",fontSize:20, marginLeft: '5%', marginTop: "25%"}}>Select your favorite brands</Text>
                    <SearchBar
                        lightTheme
                        inputStyle={{color: 'black', fontFamily:"IBM Plex Mono"}}
                        inputContainerStyle = {{color: 'white', backgroundColor: 'rgba(0,0,0,0.05)', height: '100%'}}
                        containerStyle={{backgroundColor: 'white', marginTop: "10%", width: '90%',height: '25%', alignSelf: "center", borderTopWidth: 0, borderBottomWidth: 0}}
                        placeholder= "Search"
                        onChangeText = {this.updateSearchTerm}
                        value={this.state.searchTerm}
                    />
                </View>
                <View style = {styles.bottomView}>
                    <Text style = {{fontFamily: "IBM Plex Mono", fontSize: 15,  color: 'rgba(0,0,0,0.5)', marginLeft: '5%'}}>Popular</Text>
                    <FlatList
                        data={this.state.brandsArray}
                        renderItem={({item}) => {
                        var clickFunc = () => { 

                        }
                            return(
                            <TouchableOpacity onPress={() => {this.brandPressed(item)}}>
                                <View style={{width: (Dimensions.get('window').width), height: 50, padding:10, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(0,0,0,0.05)', marginTop: '2%'}}>
                                    <View style={{width: (Dimensions.get('window').width)/1.5, height: 50, margin:10, marginRight:50, flexDirection:'row', alignItems:'center'}}>
                                        <Text style={{fontFamily:"IBM Plex Mono",fontSize:20, margin:10, marginTop:20, marginLeft: 20}}>{item.brand}</Text>
                                    </View>
                                    {/* <Image style={{marginLeft:20, width: '15%', height: 10, resizeMode: "contain", marginLeft: "-5%"}} source={images.select}/> */}
                                    <Image style={{marginLeft:20, width: '15%', height: 10, resizeMode: "contain", marginLeft: "-5%"}} 
                                    source={this.state.brandsArray[item.id].selected ? images.check : images.select}/>

                                </View>
                            </TouchableOpacity>
                            );
                        }
                        }
                        horizontal={false}
                        keyExtractor = {(item, index) => index.toString()}
                        numColumns={1}
                        key={1}
                        style={{backgroundColor: 'white'}}
                    />

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
    topView: {
        flex: 2,
        backgroundColor: 'white',

    },

    bottomView: {
        flex: 3,
        backgroundColor: 'white',
    },


    continueContainer: {
        backgroundColor: 'black',
        width: '60%',
        height: '8%',
        alignItems: "center",
        alignSelf: "center",
        marginTop: '5%',
        marginBottom: '10%',
        justifyContent: 'center',
    },
});