import React, {Fragment, Component} from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar, Image,SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationActions} from 'react-navigation';

import logoImage from '../assets/img/LogoRappiBetP.png'
import BetSection from '../assets/img/bets.png'
import MatchSection from '../assets/img/match.png'

class sideMenu extends Component{

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction)
    }
    render(){
        return(
            <View>
                <ScrollView>
                    <View>
                        <View style={styles.logoContainer}>
                            <Image source={logoImage} style={styles.logoImage}/>
                        </View>
                        <View style={styles.logoContainer}>
                            <TouchableWithoutFeedback onPress={this.navigateToScreen('Matchs')}>
                                <Image source={MatchSection} style={styles.imageSection}/>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={this.navigateToScreen('Bets')}>
                                <Image source={BetSection} style={styles.imageSection}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
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
    logoContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    logoImage: {
        width: 80,
        height: 80,
    },
    imageSection: {
        width: 60,
        height: 60,
    },
    sectionContainer2: {
        marginTop: 32,
        paddingHorizontal: 24,
        alignItems: "center",
    },
    textFonts: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#07A200',
        textAlign: "center",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 74,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
  });

export default sideMenu;

