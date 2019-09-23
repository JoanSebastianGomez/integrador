import React, {Fragment, Component} from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar, Image,SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Match from '../componentes/match-bets';
import Menu from '../assets/img/menu1.png';
import Search from '../assets/img/search.png';
import Favorito from '../assets/img/star2.png'
import Regular from '../assets/img/star1.png'
import Team1 from '../assets/img/dim.png';
import Team2 from '../assets/img/ah.png';

class preferences extends Component{

    constructor(props) {
        super(props);
        this.state = { uri: require('../assets/img/star1.png'), active:false }
    }
    
    changeLogo=()=>{
        if(this.state.active){
            this.setState({
                uri: require('../assets/img/star1.png'),
                active:false
            });
        }
        else{
            this.setState({
                uri: require('../assets/img/star2.png'),
                active:true
            })
        }
        
    }
    openDrawer=()=>{
        this.props.navigation.openDrawer()
    }

    render(){
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
                            <Text style={styles.textFonts}>Equipos</Text>
                            <View style={styles.row}>
                                <View style={styles.box}>
                                    <Image source={Team1} style={styles.imageTeam}/>
                                    <TouchableWithoutFeedback onPress={this.changeLogo}>
                                        <Image source={this.state.uri} style={styles.imageTeam}/>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={[styles.box]}>
                                    <Image source={Team2} style={styles.imageTeam}/>
                                    <TouchableWithoutFeedback>
                                        <Image source={this.state.uri} style={styles.imageTeam}/>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    box: {
        flex: 1,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    imageTeam: {
        width: 50,
        height: 50,
        marginLeft: 8,
        marginRight: 8,
    },
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
    imageMenu: {
        width: 40,
        height: 40,
        marginRight: 80,
    },
    imageSearch: {
        width: 30,
        height: 30,
        marginLeft: 80,
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
  });

export default preferences;

