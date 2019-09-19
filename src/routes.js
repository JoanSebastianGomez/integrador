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
import Teams from './ventanas/teams'
import Team1 from './ventanas/team1'
import Team2 from './ventanas/team2'
import Stadistics from './ventanas/stadistics'
import History from './ventanas/history'





const BetStack =createBottomTabNavigator({
    Bets:Bets,
    Team1:Team1,
    Team2:Team2,
    Stadistics:Stadistics
})

const AppStack =createBottomTabNavigator({
    Matchs:Matchs,
    Teams:Teams,
    History:History
})

const AuthStack=createStackNavigator({
    Auth:Auth
},{
    headerMode:"none"
}


)

export const RootNavigator =()=>{
    return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack,
        Bet:BetStack
    },{
        initialRouteName:'Auth'
    }
    ))
}