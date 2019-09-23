import { GET_TEAMS } from '../types';
import axios from 'axios';

import { url,equipos } from '../utils/misc';

export function getTeams() {

    const request = axios.get("192.168.1.62:6204/equipo").then(response => {
        console.log("esta")
        console.log(response.data);
    }
    ).catch(err=>{

        console.log("llego")
    });

    return {

        type: GET_TEAMS,
        payload: {
            teams: '2213123'
        }
    }
}