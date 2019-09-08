/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Bottom from './src/componentes/bottom';
import Match from './src/componentes/match';
import Input from './src/componentes/input';
import Bets from './src/ventanas/bets';
import Balon from './src/assets/img/Image.png';
import Card from './src/assets/img/tarjeta.png';
import Menu from './src/assets/img/menu.png';
import Search from './src/assets/img/search.png';
import Date from './src/componentes/date';
import MenuLogo from './src/componentes/menuLogo';
import MenuSearch from './src/componentes/searchLogo';
import SearchW from './src/ventanas/search';

class App extends Component {

  state = {
    nameOfApp: 'lalala',
    be: 'jiji'
  }
  render(){
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
          
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <View style={styles.navbar}> 
              <Image source={Menu} style={styles.imageMenu}/>
              <Text style={styles.sectionTitle}>Rappi Bet</Text>
              <Image source={Search} style={styles.imageSearch}/>
            </View>*/}
            <View style={styles.body}>
              <Input style={styles.fechas}/>
              <View style={styles.sectionContainer1}>
                <Bottom name={this.state}/>
              
                  <Match/>
                
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
//<Button title="abrir menu" onPress={() => this.props.navigation.openDrawer()}/>

const OtherStack = createStackNavigator({
  Bets:{
    screen: Bets,
    navigationOptions: ({ navigation }) => ({
      headerLeft: MenuLogo,
      headerRight:
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
                      <Image source={Search} style={styles.imageSearch}/>
                    </TouchableWithoutFeedback>
    })
  },
  Search:{
    screen: SearchW,
  },
},{
  initialRouteName: 'Bets',
  defaultNavigationOptions: {
    title: 'Rappi Bet',
    headerTitleStyle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#07A200',
      flex: 1,
      textAlign: "center",
    }
  }
})

const HomeStack = createStackNavigator({
  
  Home:{
    screen: App,
    navigationOptions: ({ navigation }) => ({
      headerLeft: 
                    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                        <Image source={Menu} style={styles.imageMenu}/>
                    </TouchableWithoutFeedback>,
      headerRight:
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
                      <Image source={Search} style={styles.imageSearch}/>
                    </TouchableWithoutFeedback>
    })
  },
  Bets:{
    screen: Bets,
    
  },
  Search:{
    screen: SearchW,
  }
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Rappi Bet',
    headerStyle:{
      
    },
    headerTitleStyle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#07A200',
      flex: 1,
      textAlign: "center",
    }
  }
})

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Bets: OtherStack,
  /*Bet:{
    screen: Bets,
    navigationOptions: {
      title: ' ',
      drawerIcon:() => (
        <Image source={Menu} style={styles.imageSearch}/>
      )
    }
  },
  Search: SearchW,*/
},{
  drawerWidth: 140,
  drawerBackgroundColor: '#8EE46D',
  drawerType: "front",
  contentOptions:{
    activeBackgroundColor: '#ABAEA9'
  }
})


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  navbar: {
    backgroundColor: '#F7F4F4',
    padding: 30,
    paddingBottom: 20,
    flex: 1,
    flexDirection: "row",
  },
  fechas: {
    textAlign: "center",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer1: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#07A200',
    textAlign: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  imageMenu: {
    width: 50,
    height: 50,
    marginRight: 80,
  },
  imageSearch: {
    width: 28,
    height: 28,
    marginRight: 20,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default createAppContainer(AppNavigator);
