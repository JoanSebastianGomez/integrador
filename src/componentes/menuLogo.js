import React, {Component} from 'react';
import {Image} from 'react-native';

import Logo from '../assets/img/menu.png';

class LogoMenu extends Component {
    render(){
        return(
            <Image
                source = {Logo}
                style = {{ width: 50, height: 50,}}
            />
        )
    }
}

export default LogoMenu;