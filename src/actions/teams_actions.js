import { GET_TEAMS } from '../types';
import Axios from 'axios';

import { url, equipos } from '../utils/misc';

export async function getTeams() {

    try {
        const request = await Axios({
            method: 'GET',
            url: `${url}${equipos}/equipo`
        });
    } catch (err) {
        console.log(err)
    }

    return {

        type: GET_TEAMS,
        payload: {
            teams: [
                {
                    "id": "5d700ccdaa2e000b3c4ee2a3",
                    "nombreEquipo": "Deportivo Independiente Medellin",
                    "jugador": null,
                    "jugadores": [
                        "David Gonzales",
                        "German Cano"
                    ],
                    "rutaFotoEquipo": "localhost/img/picture/dim.jpg"
                },
                {
                    "id": "5d700e1eaa2e000b3c4ee2a8",
                    "nombreEquipo": "Atletico Nacional",
                    "jugador": null,
                    "jugadores": [
                        "Renes Higuita",
                        "Victor hugo aristizabal"
                    ],
                    "rutaFotoEquipo": "localhost/img/picture/nacinal.jpg"
                },
                {
                    "id": "5d8535b933a0a84e0069944f",
                    "nombreEquipo": "Millonarios FC",
                    "jugador": null,
                    "jugadores": [
                        "Watson Renteria",
                        "Rafael Robayo"
                    ],
                    "rutaFotoEquipo": "localhost/img/picture/millonarios.jpg"
                }
            ]
        }
    }
}

export async function getTeam1() {

    try {
        const request = await Axios({
            method: 'GET',
            url: "192.168.1.62:6204/equipo/"
        });
    } catch (err) {
        console.log(err)
    }

    return {

        type: GET_TEAMS,
        payload: {
            team1: {
                "id": "5d700ccdaa2e000b3c4ee2a3",
                "nombreEquipo": "Deportivo Independiente Medellin",
                "jugador": null,
                "jugadores": [
                    "David Gonzales",
                    "German Cano"
                ],
                "rutaFotoEquipo": "localhost/img/picture/dim.jpg"
            }
        }
    }
}

export async function getTeam2() {

    try {

        const request = await Axios({
            method: 'GET',
            url: `${url}${apuesta}/equipo`
        });
        console.log("SLSLSLSLS")
        console.log(request)
    }

    catch (err) {
        console.log(err)
    }

    return {

        type: GET_TEAMS,
        payload: {
            team2: {
                "id": "5d700ccdaa2e000b3c4ee2a3",
                "nombreEquipo": "Deportivo Independiente Medellin",
                "jugador": null,
                "jugadores": [
                    "David Gonzales",
                    "German Cano"
                ],
                "rutaFotoEquipo": "localhost/img/picture/dim.jpg"
            }
        }
    }
}