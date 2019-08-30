/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
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

import Bottom from '../componentes/bottom';
import Match from '../componentes/match';
import Input from '../componentes/input';
import Bets from '../ventanas/bets';
import Balon from '../assets/img/Image.png';
import Card from '../assets/img/tarjeta.png';
import Menu from '../assets/img/menu.png';
import Search from '../assets/img/search.png';
import Date from '../componentes/date';

class matchs extends Component {

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
            <View style={styles.navbar}>
              <Image source={Menu} style={styles.imageMenu}/>
              <Text style={styles.sectionTitle}>Rappi Bet</Text>
              <Image source={Search} style={styles.imageSearch}/>
            </View>
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
    width: 30,
    height: 30,
    marginLeft: 80,
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

export default matchs;
