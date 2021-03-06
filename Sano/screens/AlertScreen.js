import React, { Component } from "react";
import {Text,SafeAreaView, StatusBar, Modal, View} from 'react-native';
import androidSafeView from '../StyleSheets/androidSafeView';
import SpanFont from '../StyleSheets/font'
import { TouchableOpacity } from "react-native-gesture-handler";


export default class AlertScreen extends Component {
    constructor(props){
        super(props);

        //let shared = User.getUser();
        this.state = {
            modalVisible: true, 
        }        
    }

    componentdidMount(){
        //set modal true every time the page is returned to
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.setState({
                modalVisible: false
            });
            
        });
        return;



    }

    componentWillUnmount() {
        // Remove the event listener
        if (this.focusListener) {
          this.focusListener.remove();
        }
        
      }


    exitModal = () => {
        console.log('test');
        this.setState({modalVisible: false});
    }

    render(){
        // return(
        //     <>
        //     <StatusBar barStyle = "dark-content"/>
        //     <SafeAreaView style={{flex: 1, }, androidSafeView.AndroidSafeArea}>
        //     <Modal
        //         animationType="slide"
        //         transparent={true}
        //         visible={this.state.modalVisible} 
        //     >

        //         <TouchableOpacity onPress = {this.exitModal}>
        //         <View style = {{backgroundColor: 'blue', height: '50%'}}>

        //                 <Text>
        //                     exit
        //                 </Text>
        //                 </View>

      
        //         </TouchableOpacity>

        //         <Text style = {{ marginTop: '50%'}}>Alert Screen</Text>


        //     </Modal>

        //     </SafeAreaView>
        //     </>

        // );
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