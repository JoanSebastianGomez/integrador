/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import bets from './src/ventanas/bets'
import matchs from './src/ventanas/matchs'


const AppNavigator = createStackNavigator({
  Bets:{
    screen: bets
  },
  Matchs:{
    screen: matchs
  }
},{
  initialRouteName: 'Matchs'
})



export default createAppContainer(AppNavigator);
