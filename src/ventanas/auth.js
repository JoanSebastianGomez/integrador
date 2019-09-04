import React, {Fragment, Component} from 'react';
import AuthLogo from '../componentes/authLogo'
import AuthForm from '../componentes/authForm'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  ActivityIndicator,

} from 'react-native';



class Auth extends Component {

 state={
   loading:false
 }



  render(){

    if(this.state.loading){
     return(
        <View style={styles.loading}>
            <ActivityIndicator/>
        </View>
     )
    } else{

      return (
        <ScrollView style={styles.container}>
          <View >
            <AuthLogo></AuthLogo>
            <AuthForm/>
        </View>
        </ScrollView>
         );
    }
              
     
   
  }
}
const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:"white"
} ,
loading:{
  flex:1,
  backgroundColor:"white"
}



})

export default Auth;
