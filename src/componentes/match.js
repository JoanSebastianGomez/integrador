import React from 'react';
import {StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback} from 'react-native';
import Team1 from '../assets/img/dim.png';
import Team2 from '../assets/img/ah.png';
import Date from './date';

const match = (props) => {
    return(
      <View style={styles.apuesta}>
           <TouchableWithoutFeedback 
              onPress={() => alert('Apuesta')}
              >
        <Image
            source={Team1}
            style={styles.imageTeam}
            />
            </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => alert('Apuesta')}>
            <Date/>
        </TouchableWithoutFeedback>  
        <TouchableWithoutFeedback onPress={() => alert('Apuesta')}>
            <Image
            source={Team2}
            style={styles.imageTeam}
            />
        </TouchableWithoutFeedback>  
      </View>
    )
}

const styles = StyleSheet.create({
    
    imageBalon: {
      width: 40,
      height: 40,
      marginLeft: 8,
    },
    imageCard: {
      width: 24,
      height: 30,
      marginLeft: 16,
      marginTop: 6,
    },
    imageTeam: {
        width: 50,
        height: 50,
        marginLeft: 8,
        marginRight: 8,
    },
    apuesta:{
        flex: 1,
        flexDirection: "row",
    },
  });

export default match;


/*<Button
            title="acept"
            onPress={() => alert('wiii')}
        />*/