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
    
      // the add post button was removed so i dont think we will need this function anymore
    addPostPressed = () => {
        if(this.state.selectedIndex == 0){
            alert('Add Post Pressed');
        } else if(this.state.selectedIndex == 1){
            alert('Add Collection Pressed');
        } else if(this.state.selectedIndex == 2){
            alert('Add Wishlist Pressed');
        }
    
    }
    collectionPressed = () => {
        alert('Collection Pressed')
    }
    wishlistPressed = () => {
        alert('Wishlist Pressed')
    }

    followButtonPressed = () => {
        alert('Follow Button Pressed');
    }

    notificationButtonPressed = () => {
        alert('Follow Button Pressed');
    }
    settingsButtonPressed = () => {
        alert('Setting Button Pressed');
    }

    

    render(){
        return(
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, backgroundColor: 'white' }}>

                <View style = {styles.topView}>
                    <View style = {styles.profileTag}> 
                    <TouchableOpacity onPress = {this.settingsButtonPressed} style = {{paddingLeft: '20%'}}>
                        <Image source = {Images.settingsButton} style = {styles.settingButtonStyle}  />
                    </TouchableOpacity>

                        {/* Grab userName!! */}
                        <Text style = {styles.userName}>@theBane</Text>
                        <View style={{flex:1,}} />
                    </View>

                    <View style = {styles.header}>
                        <View style = {styles.headerLeft}>
                            <Image source = {Images.tempProfileImage} style = {styles.profileImage}/>
                            <View>
                                {/* Grab Name!! */}
                                <Text style = {styles.name}> Gavin Bains</Text>
                                <View style = {styles.followers}>
                                <Image source = {Images.followers} style = {styles.followersImageStyle}/>

                                {/* Grab Number of Followers!! */}
                                <Text style = {styles.followersText}> 89 Followers</Text>

                                </View>

                                <View style = {styles.bio} >
                                    <Text numberOfLines={2} style = {styles.bioText}>You merely adopted the dark. I was born in it, molded by it.</Text>
                                </View>
                                

                            </View>
                        </View>

                        <View style = {styles.headerRight}>
                            {/* Does this bell Do anything??? */}
                            <TouchableOpacity  onPress = {this.notificationButtonPressed}>
                                <Image source = {Images.notification} style = {styles.notification}/>
                            </TouchableOpacity>

                        </View>


                    </View>

                    {/* Get The Bio From API */}
  

                </View>

                <View style = {styles.bottomView}>
                    <View style={{width: '100%', flexDirection: 'row', alignItems: "baseline",}}>
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

                        <View style = {styles.followButtonContainter}> 
                            <TouchableOpacity  onPress = {this.followButtonPressed}>
                                <Image source = {Images.followButton} style = {styles.followButton}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {this.renderSegment()}

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


                        {/*get list of uri from api*/ }
                        


                </View>

            </SafeAreaView>
            </>
        );
    }

    renderSegment () {
        if(this.state.selectedIndex == 0){
            return(
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
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },

                        
                    ]}


                />
            );
        } else if(this.state.selectedIndex == 1){
            return(
                <View style = {{alignSelf: "center"}}>
                    <MasonryList
                        sorted
                        columns = {1}
                        imageContainerStyle	= {{height: 230,  opacity: 0.5 }}
                        containerWidth	= {(Dimensions.get('window').width) - 20}
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

                        onPressImage = {this.collectionPressed}
                        renderIndividualFooter={(res) => {
                        // console.log('res is', res);
                            return (
                            <View style = {styles.CollectionFooter}>
                                <View style = {{width: '73%'}}>
                                    <Text style = {styles.CollectionFooterFont}>
                                        Collection Footer
                                    </Text>
                                </View>

                                <View style = {{alignItems: "flex-end", width: '25%', marginRight: 10}}>
                                    <Text style = {styles.postsFooterFont}>
                                        100 POSTS
                                    </Text>
                                </View>

                            </View>
                            );
                        }
                    }
                    />
                </View>
            );

        } else if(this.state.selectedIndex == 2){
            return(
                <View style = {{alignSelf: "center"}}>
                    <MasonryList
                        sorted
                        columns = {1}
                        imageContainerStyle	= {{height: 230,  opacity: 0.5 }}
                        containerWidth	= {(Dimensions.get('window').width) - 20}
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

                        onPressImage = {this.wishlistPressed}
                        renderIndividualFooter={(res) => {
                        // console.log('res is', res);
                            return (
                            <View style = {styles.CollectionFooter}>
                                <View style = {{width: '73%'}}>
                                    <Text style = {styles.CollectionFooterFont}>
                                        Wishlist Footer
                                    </Text>
                                </View>

                                <View style = {{alignItems: "flex-end", width: '25%', marginRight: 10}}>
                                    <Text style = {styles.postsFooterFont}>
                                        100 POSTS
                                    </Text>
                                </View>

                            </View>
                            );
                        }
                    }
                    />
                </View>
            );

        }


    }
}


const styles = StyleSheet.create({
    topView: {
        flex: 1,
        backgroundColor: 'white'
    },
    followButton: {
        // alignSelf: "flex-start",
        // // marginLeft: '-80%',
        // // marginTop: '-130%',
        // //  resizeMode: 'contain',
        //  width: undefined,
        //  height: undefined,
        aspectRatio: 2.5,
        width: '100%',
        height: undefined,
        resizeMode: "contain"
    },
    followButtonContainter: {
        width: '20%', 
        height:  '20%', 
        marginBottom: '5%',
        marginTop: '-5%',
        alignSelf: "flex-end"
    },
    header: {
        flexDirection: "row",
        width: '100%',
        height: '40%',
        marginTop: '3%',
    },
    headerLeft: {
        width: '80%',
        flexDirection: "row",
        
    }, 
    headerRight: {
        width: '18%',
        alignItems: "flex-end",

    },
    followers: {
        flexDirection: 'row',
        height: '30%',
        
    },
    followersImageStyle : {
        width: 15, 
        height: 10,
        marginLeft: '3%',
        marginTop: '1%',
    },
    followersText: {
        fontFamily: "IBM Plex Mono",
        fontSize: 10, 
    },
     
    profileTag: {
        // flexDirection: "row",
        // width: '100%',
        // height: '20%',
        // borderColor: '#E5E5E5',
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',

        width: '100%',
        height:'20%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        zIndex: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',



    },
    userName: {
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        flex: 2,
        textAlign:'center', 

    },
    settingButtonStyle: {
        height: 17,
        width: 17,
    },

    bottomView: {
        flex: 3.5,
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
        borderBottomColor: 'black',
        textDecorationLine: 'underline',
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
    addpostButton: {
        alignItems: "flex-end",
        marginLeft: '35%',
        aspectRatio: 1, 
        resizeMode: 'contain',
        width: '10%',
        height: undefined,
    },
    profileImage: {
        width: '25%', 
        height: '120%',
        resizeMode: 'contain',
        // borderRadius: 10000, // I just made this a really large number
        borderRadius: Dimensions.get('window').height / 2, 

        marginLeft: '3%',
    },

    name: {
        fontFamily: SpanFont.Span.fontFamily,
        fontSize: 23
    },

    notification: {
        // height: '25%',
        // width: '5%',
        height: 17,
        width: 14,
        marginLeft: '35%',        
    },
    bio: {
        width: '90%',
        marginLeft: '3%',
        fontFamily: "IBM Plex Mono",
    }, 
    bioText: {
        fontFamily: "IBM Plex Mono",
        fontSize: 10, 

    },
    CollectionFooter: {
        flexDirection: "row",
        width: '100%',
        marginBottom: '5%'

    },
    CollectionFooterFont: {
        fontFamily: SpanFont.Span.fontFamily,
        fontSize: 20,
    }, 
    postsFooterFont: {
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        color: 'rgba(0,0,0,0.5)'
    },

});