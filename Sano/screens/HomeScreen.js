import React, { Component } from "react";
import {Text,SafeAreaView, StatusBar, StyleSheet, View, Image, Dimensions, TextComponent} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import MasonryList from "react-native-masonry-list";
import SpanFont from '../StyleSheets/font'
import Images from "../assets/Images/Images";
import { TouchableOpacity } from "react-native-gesture-handler";




export default class HomeScreen extends Component {

    
    constructor(props){
        super(props);

        //let shared = User.getUser();
        this.state = {
            selectedIndex: 0,
        }        
    }

    likePressed = () => {
        alert('like Pressed')
    }
    commentPressed = () => {
        alert('comment Pressed')
    }

    bagPressed = () => {
        alert('bag Button Pressed');
    }

    addPressed = () => {
        alert('add Button Pressed');
    }
    profileImagePressed = () => {
        alert('ProfileImage Pressed');
    }


    render(){
        return(
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, marginTop: '2%' }}>
            <View style = {{alignSelf: "center"}}>
                    <MasonryList
                        sorted
                        columns = {1}
                        imageContainerStyle	= {{height: 400,}}
                        containerWidth	= {(Dimensions.get('window').width)}
                        images={[
                            { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg"                        },
                            { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                            { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                                dimensions: { width: 1080, height: 1920 } },
                            { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                                id: "blpccx4cn" },
                            { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                            { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        ]}
                        renderIndividualHeader = {(res) => {
                        // console.log('res is', res);
                            return (
                            <View style = {styles.PostHeader}>
                                <View style = {{width: '70%', flexDirection: 'row'}}>
                                <TouchableOpacity  onPress = {this.profileImagePressed}>
                                    <Image source = {Images.tempProfileImage} style = {styles.profileImage}/>
                                </TouchableOpacity>

                                    <View style = {styles.PostHeaderName}>
                                        {/* get the user name and tag name */}
                                        <Text style = {styles.PostHeaderNameFont}>Gavin Bains</Text>
                                        <Text style = {styles.PostHeaderUsernameFont}>@theBane</Text>

                                    </View>
                                </View>
                                <View style = {styles.PostRightHeader}>
                                    {/* get a Time Stamp*/}
                                    <Text style = {styles.PostFooterFont}>
                                        3m
                                    </Text>
                                    <Image source = {Images.feedDropDownArrow} style = {styles.feedDropDownArrow}/>

                                </View>

                            </View>
                            );
                        }
                        }

                        onPressImage = {this.collectionPressed}
                        renderIndividualFooter={(res) => {
                            return (
                            <View style = {styles.PostFooter}>
                                <View style = {{ flexDirection: "row", alignItems: "center",  height: '40%',}}>
                                    {/* Likes, comments, bag*/}
                                    <View style = {styles.PostButtonsView} >
                                    <TouchableOpacity  onPress = {this.likePressed} style = {styles.likeTouchable}>
                                        <Image source = {Images.likePost} style = {styles.postButtonsLike}/>
                                        <Text style = {styles.valuesText}> 33</Text>

                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity  onPress = {this.commentPressed} style = {styles.commentAndBagTouchable}>
                                        <Image source = {Images.commentPost} style = {styles.postButtonsComment}/>
                                        <Text style = {styles.valuesText}> 16</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity  onPress = {this.bagPressed} style = {styles.commentAndBagTouchable}>
                                        <Image source = {Images.shoppingBag} style = {styles.postButtonsBag}/>
                                        <Text style = {styles.valuesText}> 3</Text>
                                    </TouchableOpacity>




                                    
                                        {/* get num of Likes, comments, bag*/}



                                    
                                    </View>
                                   
                                    {/* add post*/}
                                    <View style = {{width: '30%',alignItems: "flex-end", height: '100%', alignItems: "center", justifyContent: 'center'}}>
                                    <TouchableOpacity  onPress = {this.addPressed}>
                                        <Image source = {Images.addToCollection} style = {styles.addToCollection}/>
                                    </TouchableOpacity>
                                    </View>
                                </View>




                                {/*caption*/}   
                                <View style = {{width: '90%', height: '60%', justifyContent: "center",}}>
                                    <Text style = {styles.CaptionFont}>
                                        {/* get caption*/}
                                        Californian Summer. We out here vibin
                                    </Text>
                                </View>



                            </View>
                            );
                        }
                    }

                    />
                </View>
            </SafeAreaView>
            </>

        );
    }
    
}

const styles = StyleSheet.create({
    PostHeader: {
        flexDirection: "row",
        width: '100%',
        marginBottom: '2%',
    },
    PostHeaderFont: {
        fontFamily: SpanFont.Span.fontFamily,
        fontSize: 20,
    }, 
    PostHeaderName:{
        flexDirection: 'column',
        marginLeft: '5%',
        width: '50%',
    },
    PostHeaderNameFont: {
        fontFamily: "IBM Plex Mono"
    },
    PostHeaderUsernameFont: {
        fontFamily: "IBM Plex Mono",
        opacity: 0.5
    },
    feedDropDownArrow: {
        marginLeft: '10%',
        width: 10,
        height: 6,
    },
    PostRightHeader: {
        alignItems: "flex-end", 
        width: '35%', 
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    PostFooter: {
        flexDirection: "column",
        width: '100%',
        marginBottom: '5%',
        // there is a weird issue with the library where putting 10% height has a huge gap underneath the footer
        // manually calculating 10% solved this issue for some reason
        height: Dimensions.get('window').height * 0.1,  

    },
    PostFooterFont: {
        fontFamily: SpanFont.Span.fontFamily,
        fontSize: 10,
        opacity: 0.5,
    }, 
    PostButtonsView: {
        flexDirection: "row",
        width: '75%',
        alignItems: "center",
        height: '100%'

    },
    profileImage: {
        width: 40, 
        height: 40,
        // borderRadius: 10000, // I just made this a really large number
        borderRadius: Dimensions.get('window').height / 2, 
        marginLeft: '3%',
    },
    postButtonsLike: {
        width: 12, 
        height: 12,

    },
    postButtonsComment: {
        width: 12, 
        height: 12,
        
    },
    postButtonsBag: {
        width: 12, 
        height: 15,        
    },

    addToCollection: {
        width: 12, 
        height: 12,
    },
    likeTouchable: {
        marginLeft: '5%',
        flexDirection: 'row', 
        justifyContent: "center", 
        alignItems: "center"
    },
    commentAndBagTouchable: {
        marginLeft: '10%',
        flexDirection: 'row', 
        justifyContent: "center", 
        alignItems: "center"
    },
    CaptionFont: {
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        marginLeft: '2%',

    },

    valuesText: {
        marginLeft: '1%', 
        justifyContent: "center", 
        alignItems: "center"
    }



});