import React, { Component } from "react";
import {Text,SafeAreaView, StatusBar, StyleSheet, View, Image, Dimensions, TextComponent} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import SpanFont from '../StyleSheets/font'
import Images from "../assets/Images/Images";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Masonry from 'react-native-masonry';
import MasonryList from "react-native-masonry-list";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ListView from 'deprecated-react-native-listview';



export default class ExploreScreen extends Component {

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
    
      searchButtonPressed = () => {
        alert('Search Button Pressed');
    }
    render(){
        return(
            <>
            <StatusBar barStyle = "dark-content"/>
            <SafeAreaView style={{flex: 1, backgroundColor: 'white' }, androidSafeView.AndroidSafeArea}>

                <View style = {styles.topView}>
                    <View style = {styles.header}>
                        <View style = {styles.headerLeft}>
                            <Text style  = {styles.exploreText} >Explore</Text>
                        </View>

                        <View style = {styles.headerRight}>
                            {/* Does this bell Do anything??? */}
                            <TouchableOpacity onPress onPress = {this.searchButtonPressed}>
                                <Image source = {Images.search} style = {styles.search}/>
                            </TouchableOpacity>

                        </View>


                    </View>
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
                            values={["FOR YOU", "TRENDING",]}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                            />
                        </View>
                    </View>
                    {this.renderSegment()}            


                </View>

            </SafeAreaView>
            </>

        );
    }



    renderSegment () {
        if(this.state.selectedIndex == 0){
            return(
                <ScrollView>

  
                <MasonryList
                    sorted
                    images={[

                        { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                        { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                            dimensions: { width: 1080, height: 1920 } },
                        { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                            id: "blpccx4cn" },
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                    ]}
                    columns = {3}
                />
             </ScrollView>
            );
        } else if(this.state.selectedIndex == 1){
            return(
                <MasonryList
                    sorted
                    images={[
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },

                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                        { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                        { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                            dimensions: { width: 1080, height: 1920 } },
                        { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                            id: "blpccx4cn" },
                    ]}
                    columns = {3}

                />
            );
        }
    }
}

const styles = StyleSheet.create({
    topView: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerLeft: {
        width: '80%',
        flexDirection: "row",
    }, 
    exploreText: {
        fontFamily: SpanFont.Span.fontFamily,
        fontSize: 24, 
        marginLeft: '5%',        
    },
    headerRight: {
        width: '15%',
        alignItems: "flex-end",

    },
    header: {
        flexDirection: "row",
        width: '100%',
        height: '50%',
        marginTop: '5%'
    },
    search: {
        height: 18,
        width: 18,
        marginLeft: '35%',        
    },
    bottomView: {
        flex: 8,
        backgroundColor: 'white'

    },
    tabStyle:{
        borderWidth: 0,
        backgroundColor: 'white',
        borderColor: 'white'
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
        backgroundColor: 'white',
    },
    segmentedControlView: {
        width: '50%',
        marginLeft: '-3%',
        marginBottom: '5%'
    },

});

