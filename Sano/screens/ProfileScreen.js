import React, { Component } from "react";
import {Text,SafeAreaView, StatusBar, StyleSheet, View, Image, Dimensions, TextComponent} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import SpanFont from '../StyleSheets/font'
import Images from "../assets/Images/Images";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Masonry from 'react-native-masonry';
import MasonryList from "react-native-masonry-list";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListView from 'deprecated-react-native-listview';








export default class ProfileScreen extends Component {

    constructor(props){
        super(props);

        //let shared = User.getUser();
        this.state = {
            selectedIndex: 0,
        }


        
    }

    handleIndexChange = index => {
        this.setState({
          selectedIndex: index
        });
      };
    
      addPostPressed = () =>{
        alert('Add Post Pressed');
      }

      followButtonPressed = () =>{
        alert('Follow Button Pressed');
      }

    render(){
        return(
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, backgroundColor: 'white' }, androidSafeView.AndroidSafeArea}>

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
                    <TouchableOpacity onPress onPress = {this.followButtonPressed}>
                        <Image source = {Images.followButton} style = {styles.followButton}/>
                    </TouchableOpacity>
                </View>

                <View style = {styles.bottomView}>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: "baseline"}}>
                        <View style = {styles.segmentedControlView}>
                            <SegmentedControlTab
                            tabStyle={styles.tabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            activeTabStyle={styles.activeTabStyle}
                            tabsContainerStyle = {styles.tabContainer}
                            activeTabTextStyle	 = {styles.activeTabTextStyle	}
                            activeTabStyle	 = {styles.activeTab}
                            values={["POSTS", "COLLECTIONS", "WISHLIST"]}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                            />
                        </View>
                        <View style = {styles.addPostView}>
                            <TouchableOpacity onPress onPress = {this.addPostPressed}>
                                <Image source ={Images.addPost}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                        {/* <Masonry
                            sorted // optional - Default: false, Whether to sort bricks according to their index position or allow bricks to fill in as soon as the uri is ready.
                            columns={2} // optional - Default: 2
                            bricks={[
                                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                                // { uri: Images.tempProfileImage },
                                // { uri: 'http://image2.jpg' },
                                // { uri: 'http://image3.jpg' }
                            ]}
                            /> */}

                            {/* <MasonryList
                                images={this.state.images}
                                onEndReached={() => {
                                    this.addMoreImages(moreImages);
                                }}
                            /> */}



                        <MasonryList
                            sorted
                            images={[
                                // Can be used with different image object fieldnames.
                                // Ex. source, source.uri, uri, URI, url, URL
                                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                                // IMPORTANT: It is REQUIRED for LOCAL IMAGES
                                // to include a dimensions field with the
                                // actual width and height of the image or
                                // it will throw an error.
                                // { source: require("yourApp/image.png"),
                                //     dimensions: { width: 1080, height: 1920 }
                                // },
                                // "width" & "height" is an alternative to the dimensions
                                // field that will also be acceptable.
                                // { source: require("yourApp/image.png"),
                                //     width: 1080,
                                //     height: 1920 },
                                { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                                    // Optional: Adding a dimensions field with
                                    // the actual width and height for REMOTE IMAGES
                                    // will help improve performance.
                                    dimensions: { width: 1080, height: 1920 } },
                                { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                                    // Optional: Does not require an id for each
                                    // image object, but is for best practices.
                                    id: "blpccx4cn" },
                                { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                                { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                            ]}
                        />


                </View>

            </SafeAreaView>
            </>
        );
    }
}


const styles = StyleSheet.create({
    topView: {
        flex: 2,
        backgroundColor: 'white'
    },
    followButton: {
        marginTop: '2%',
        marginLeft: '6%',
    },
    bottomView: {
        flex: 6,
        backgroundColor: 'white'


    },
    tabStyle:{
        borderWidth: 0,
        backgroundColor: 'white'
    },
    tabTextStyle: {
        color: 'black',
        fontFamily: "IBM Plex Mono",
        fontSize: 12,

    },
    activeTabTextStyle	: {
        color: 'black',
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        paddingBottom: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    activeTab: {
        backgroundColor: 'white',
    },
    tabContainer: {
        backgroundColor: 'white'
    },
    segmentedControlView: {
        width: '80%',
        marginLeft: '-3%'
    },
    addPostView: {
        width: '19%',
        alignItems: "flex-end",
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
        fontFamily: "IBM Plex Mono",
        marginTop: '-5%'
    }, 
    bioText: {
        fontFamily: "IBM Plex Mono",
        fontSize: 12, 

    },

});