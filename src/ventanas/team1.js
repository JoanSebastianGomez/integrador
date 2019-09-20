/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import { getArticles } from '../actions/index'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Match from '../componentes/match';
import Input from '../componentes/input';
import Menu from '../assets/img/menu.png';
import Search from '../assets/img/search.png';
import Team3 from '../assets/img/america.png';
import Team4 from '../assets/img/cali.png';
import Team2 from '../assets/img/ah.png';

class team1 extends Component {

    goNext=()=>{
        this.props.navigation.navigate('Bet')
    }
    openDrawer=()=>{
        this.props.navigation.openDrawer()
    }
      
    render() {
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                        <View style={styles.navbar}>
                            <TouchableWithoutFeedback onPress={this.openDrawer}>
                                <Image source={Menu} style={styles.imageMenu}/>
                            </TouchableWithoutFeedback>
                            <Text style={styles.sectionTitle}>Rappi Bet</Text>
                            <Image source={Search} style={styles.imageSearch}/>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.textFonts}>Partidos anteriores</Text>
                            <Text style={styles.titulo}>PG      PP    PE  </Text>
                            <Text style={styles.sectionTitle}>__________________________</Text>
                            <View style={styles.sectionContainer}>
                                <Image source={Team3} style={styles.imageTeam}/>
                                <Image source={Team2} style={styles.imageTeam}/>
                                <Image source={Team4} style={styles.imageTeam}/>
                            </View> 
                            
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
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
    titulo: {
        textAlign: 'right',
        fontWeight: "bold",
        marginRight: 58,
        marginTop: 32,
        fontSize: 20,
    },
    imageTeam: {
        width: 45,
        height: 45,
        marginLeft: 64,
        marginBottom: 20,
        position: "relative",
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

function mapStateToProp(state) {
    return {
    }
}
export default connect(mapStateToProp)(team1);
