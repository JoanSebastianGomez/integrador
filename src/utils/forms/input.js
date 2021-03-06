import React, { Component } from 'react'

import { TextInput, StyleSheet } from 'react-native'
import { } from 'react-native-gesture-handler';

const input = (props) => {
    let template = null;

    switch (props.type) {
        case "textinput":
            template = <TextInput
                {...props}
                style={[styles.input, props.overrideStyle]} />
            break;
        default:
            return template
    }

    return template;


}

const styles = StyleSheet.create({

    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        fontSize: 16,
        padding: 5,
        marginTop: 10

    }
})
export default input;