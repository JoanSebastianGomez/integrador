import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback} from 'react-native';
import Balon from './assets/img/Image.png';
const bottom = (props) => {
    return(
        <TouchableWithoutFeedback 
        onPress={() => alert('wiii')}
        >
            <Image
            source={Balon}
            style={styles.imageBalon}
            />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    
    imageBalon: {
      width: 50,
      height: 50,
    },
    imageCard: {
      width: 30,
      height: 40,
    },
  });

export default bottom;


/*<Button
            title="acept"
            onPress={() => alert('wiii')}
        />*/