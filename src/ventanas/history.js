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
import Menu from '../assets/img/menu.png';
import Search from '../assets/img/search.png';
import Historial from '../componentes/historyElement';

class history extends Component {

    openDrawer=()=>{
        this.props.navigation.openDrawer()
    }
      
    render() {
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.navbar}>
                        <TouchableWithoutFeedback onPress={this.openDrawer}>
                            <Image source={Menu} style={styles.imageMenu}/>
                        </TouchableWithoutFeedback>
                        <Text style={styles.sectionTitle}>Rappi Bet</Text>
                        <Image source={Search} style={styles.imageSearch}/>
                    </View>
                    <View style={styles.body}>
                        <Input style={styles.fechas}/>
                        <View style={styles.sectionContainer1}>
                            <Historial/>                
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
    fechas: {
        textAlign: "center",
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer1: {
        marginTop: 26,
        marginBottom: 36,
        paddingHorizontal: 74,
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
});

function mapStateToProp(state) {
    return {
    }
}
export default connect(mapStateToProp)(history);
