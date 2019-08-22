import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

class Date extends Component{
    render(){
        return(
            <View style={styles.inputDate}>
                <TouchableWithoutFeedback onPress={() => alert('Apuesta')}>
                    <View><Text style={styles.contra}>VS.</Text></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => alert('Apuesta')}>
                    <View><Text>20/10/2019 6:00 pm</Text></View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contra:{
        fontWeight: "bold",
        marginBottom: 6,
        fontSize: 20,
    },
    inputDate: {
        alignItems: "center",
    },
  });

export default Date;