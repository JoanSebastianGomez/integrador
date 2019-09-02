import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback} from 'react-native';
import Balon from '../assets/img/Image.png';
import Card from '../assets/img/tarjeta.png';

const bottom = (props) => {
    return(
      <View style={styles.content}>
        <TouchableWithoutFeedback 
        onPress={() =>alert('lala')}
        >
            <Image
            source={Balon}
            style={styles.imageBalon}
            />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback 
        onPress={() =>alert('lolo')}
        >
            <Image
            source={Card}
            style={styles.imageCard}
            />
        </TouchableWithoutFeedback>
      </View>
    )
}

const styles = StyleSheet.create({
    content: {
      marginRight: 20,
    },
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
  });

export default bottom;


