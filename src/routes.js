import React from 'react';
import {Platform} from 'react-native';

import{
createStackNavigator,
createBottomTabNavigator,
createSwitchNavigator,
createAppContainer
}from 'react-navigation';


import Matchs from './ventanas/matchs';
import Bets from './ventanas/bets'
import Auth from './ventanas/auth'

const AppStack =createBottomTabNavigator({
    Matchs:Matchs,
    Bets:Bets
})

const AuthStack=createStackNavigator({
    Auth:Auth
})

export const RootNavigator =()=>{
    return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack
    },{
        initialRouteName:'Auth'
    }
    ))
}