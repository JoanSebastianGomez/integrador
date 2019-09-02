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
import SignIn from './ventanas/auth'

const AppStack =createBottomTabNavigator({
    Matchs:Matchs,
    Bets:Bets
})

const AuthStack=createStackNavigator({
    SignIn:SignIn
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