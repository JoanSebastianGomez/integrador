import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

class Result extends Component{
    render(){
        return(
            <View style={styles.inputDate}>
                <TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.contra}>3 - 1</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
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

export default Result;