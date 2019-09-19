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
    Button,
    TouchableWithoutFeedback
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



class teams extends Component {

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
                        <View>
                            <Text style={styles.textFonts}>Apuesta</Text>
                            <View style={styles.sectionContainer2}>
                                <Match/>
                            </View>
                                <Text style={styles.sectionTitle}>___________________________</Text>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.textFonts}>DIM</Text>
                                <Text style={styles.textFonts}>1,5</Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.textFonts}>AH</Text>
                                <Text style={styles.textFonts}>3,3</Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.textFonts}>Empate</Text>
                                <Text style={styles.textFonts}>0,4</Text>
                            </View>
                            
                            <Text style={styles.sectionTitle}>___________________________</Text>
                            <Text style={styles.textFonts}>Mis apuestas</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View>
                    <Button title="boton"  onPress={()=>this.goNext()} >navegar </Button>
                    <Text>Aca va los teams</Text>
                </View>
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
export default connect(mapStateToProp)(teams);
