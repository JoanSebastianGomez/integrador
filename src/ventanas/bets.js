import React, {Fragment, Component} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text, StatusBar, Image, Button, TouchableWithoutFeedback} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Match from '../componentes/match';
import Menu from '../assets/img/menu.png';
import Search from '../assets/img/search.png';

class Bets extends Component{

    /*static navigationOptions = {
        headerLeft: 
                    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                        <Text>holi</Text>
                    </TouchableWithoutFeedback>,
        headerRight:
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Search')}>
                      <Text>holix2</Text>
                    </TouchableWithoutFeedback>
    
    }*/
//<Image source={Menu} style={styles.imageMenu}/>
//<Image source={Search} style={styles.imageSearch}/>
    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                        {/*<View style={styles.navbar}>
                            <Image source={Menu} style={styles.imageMenu}/>
                            <Text style={styles.sectionTitle}>Rappi Bet</Text>
                            <Image source={Search} style={styles.imageSearch}/>
        </View>*/}
                        
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

export default Bets;