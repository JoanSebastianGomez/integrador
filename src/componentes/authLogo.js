import React from 'react';
import {View,Image} from 'react-native'
import logoImage from '../assets/img/LogoRappiBetP.png'

const LogoComponent = () => {
    return(<View style={{alignItems:'center'}}>
        <Image source  ={logoImage}
               resizeMode={'center'}
               style={{
                   width:200,
                   height:100,
                   alignItems:"center"
               }}
                      />
       </View>)

}
export default LogoComponent;

