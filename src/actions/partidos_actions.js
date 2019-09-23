import { GET_PARTIDOS } from '../types';
import Axios from 'axios';

import { url,equipos } from '../utils/misc';

export async function getPartidos() {

    try{const request = await Axios({
        method: 'GET',
        url: `${url}${equipos}/partido/`
    });}catch(err){
        console.log(err)
        console.log("WQEQEQWQE")
    }

    return {

        type: GET_PARTIDOS,
        payload: {
            partidos: [
                {
                    "id": "5d6fe374edc6c81cc0749356",
                    "fecha": "2019-03-22T05:00:00.000+0000",
                    "estado": "Inprogress",
                    "estadio": "Atanasio Girardot",
                    "idEquipoLocal": "5d700ccdaa2e000b3c4ee2a3",
                    "idEquipoVisitante": "5d700e1eaa2e000b3c4ee2a8",
                    "local": {
                        "id": "5d700ccdaa2e000b3c4ee2a3",
                        "nombreEquipo": "Deportivo Independiente Medellin",
                        "jugador": null,
                        "jugadores": [
                            "David Gonzales",
                            "German Cano"
                        ],
                        "rutaFotoEquipo": "localhost/img/picture/dim.jpg"
                    },
                    "visitante": {
                        "id": "5d700e1eaa2e000b3c4ee2a8",
                        "nombreEquipo": "Atletico Nacional",
                        "jugador": null,
                        "jugadores": [
                            "Renes Higuita",
                            "Victor hugo aristizabal"
                        ],
                        "rutaFotoEquipo": "localhost/img/picture/nacinal.jpg"
                    }
                }
            ]
        }
    }
}


