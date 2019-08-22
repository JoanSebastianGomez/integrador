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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Bottom from './src/bottom';
import Input from './src/input';
import Picker from './src/picker';
import Balon from './src/assets/img/Image.png';
import Card from './src/assets/img/tarjeta.png';

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
            <Text style={styles.sectionTitle}>Rappi Bet</Text>
            <Bottom name={this.state}/>
          </View>
          <View style={styles.body}>
            
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes kjkj</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <Bottom name={this.state}/>
            <Input/>
          </View>
          <Image
            source={Balon}
            style={styles.imageBalon}
          />
          <Image
            source={Card}
            style={styles.imageCard}
          />
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
    flex: 1,
    backgroundColor: '#F7F4F4',
    padding: 30,
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
