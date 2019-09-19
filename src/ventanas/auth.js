import React, { Fragment, Component } from 'react';
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

  state = {
    loading: false
  }

  goNext=()=>{
    this.props.navigation.navigate('DrawStack')
  }

  render() {

    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      )
    } else {

      return (
        <ScrollView style={styles.container}>
          <View style={styles.form}>
            <AuthLogo></AuthLogo>
            <AuthForm goNext={this.goNext}/>
          </View>
        </ScrollView>
      );
    }



  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  loading: {
    flex: 1,
    backgroundColor: "white"
  },
  form: {
    alignItems: "center",
  }



})

export default Auth;
