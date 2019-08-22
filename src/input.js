import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Input extends Component{
    render(){
        return(
            <View style={styles.input}>
                <Text>Fecha 1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    input: {
        alignItems: "center",
        textDecorationLine: "underline",
    },
  });

export default Input;