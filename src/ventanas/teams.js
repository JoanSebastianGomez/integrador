/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import { getTeams } from '../actions/teams_actions'

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

import Menu from '../assets/img/menu.png';
import Search from '../assets/img/search.png';
import Team1 from '../assets/img/dim.png';
import Team2 from '../assets/img/ah.png';
import Team3 from '../assets/img/america.png';
import Team4 from '../assets/img/cali.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

class teams extends Component {


    componentDidMount() {
        this.props.dispatch(getTeams())
    }
    goNext = () => {
        this.props.navigation.navigate('Bet')
    }


    renderTeams = (teams) =>
        (
            teams.teams ?
                teams.teams.teams.map((team, i) => (
                    <TouchableOpacity key={i}>
                     <Text>sada</Text>
                    </TouchableOpacity>
                ))
                : null

        )

    /*
    example 
     {           "id": "5d700ccdaa2e000b3c4ee2a3",
                "nombreEquipo": "Deportivo Independiente Medellin",
                "jugador": null,
                "jugadores": [
                    "David Gonzales",
                    "German Cano"
                ],
                "rutaFotoEquipo": "localhost/img/picture/dim.jpg"
            }
     */

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }
    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>



                        <View style={styles.navbar}>
                            <TouchableWithoutFeedback onPress={this.openDrawer}>
                                <Image source={Menu} style={styles.imageMenu} />
                            </TouchableWithoutFeedback>
                            <Text style={styles.sectionTitle}>Rappi Bet</Text>
                            <Image source={Search} style={styles.imageSearch} />
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.titulo}>PJ   G   P   E   Pts</Text>
                            <Text style={styles.sectionTitle}>_______________________________</Text>
                            <View style={styles.sectionContainer}>
                                <Image source={Team1} style={styles.imageTeam} />
                            </View>
                            <Text style={styles.sectionTitle}>_______________________________</Text>
                            <View style={styles.sectionContainer}>
                                <Image source={Team2} style={styles.imageTeam} />
                            </View>
                            <Text style={styles.sectionTitle}>_______________________________</Text>
                            <View style={styles.sectionContainer}>
                                <Image source={Team3} style={styles.imageTeam} />
                            </View>
                            <Text style={styles.sectionTitle}>_______________________________</Text>
                            <View style={styles.sectionContainer}>
                                <Image source={Team4} style={styles.imageTeam} />
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
        marginRight: 38,
        marginTop: 32,
        fontSize: 20,
    },
    body: {
        backgroundColor: Colors.white,
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
        paddingHorizontal: 74,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    sectionContainer1: {
        marginTop: 32,
        paddingHorizontal: 24,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    imageTeam: {
        width: 45,
        height: 45,
        margin: 0,
        position: "relative",
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
    console.log(state)
    return {
        Teams: state.Teams
    }
}
export default connect(mapStateToProp)(teams);
