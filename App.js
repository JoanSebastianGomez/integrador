import React,{Component}from 'react';
import {View,StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import bets from './src/ventanas/bets'
import matchs from './src/ventanas/matchs'
import {RootNavigator} from './src/routes'


class App extends Component {
render(){
  const Nav = RootNavigator();
  return(
    <View >
      <Nav/>
    </View>
  );  
  }
}


const styles=StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:'#fff'
  }
})


export default App;
