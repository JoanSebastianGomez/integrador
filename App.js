/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
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

import Bottom from './src/bottom';
import Match from './src/match';
import Input from './src/input';
import Picker from './src/picker';
import Balon from './src/assets/img/Image.png';
import Card from './src/assets/img/tarjeta.png';
import Menu from './src/assets/img/menu.png';
import Search from './src/assets/img/search.png';
import Date from './src/date';

const App = () => {

  state = {
    nameOfApp: 'lalala',
    be: 'jiji'
  }

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
            <View style={styles.sectionContainer}>
              <Bottom name={this.state}/>
             
                <Match/>
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  navbar: {
    flex: 4,
    backgroundColor: '#F7F4F4',
    padding: 30,
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: "row",
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
  imageBalon: {
    width: 50,
    height: 50,
  },
  imageCard: {
    width: 30,
    height: 40,
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

export default App;
