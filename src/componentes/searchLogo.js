import React, {Component} from 'react';
import {Image} from 'react-native';

import Logo from '../assets/img/search.png';

const LogoSearch  = () => {
        return(
            <Image
                source = {Logo}
                style = {{ width: 30, height: 30,}}
            />
        )

}

export default LogoSearch;