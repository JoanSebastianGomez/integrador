import { GET_APUESTAS } from '../types';
import Axios from 'axios';

import { url,apuesta } from '../utils/misc';

export async function getApuestas() {

    try{ const request = await Axios({
        method: 'GET',
        url: `${url}${apuesta}/apuesta`
    });}catch(err){
        console.log(err)
        console.log("WQEQEQWQE")
    }

    return {

        type: GET_APUESTAS,
        payload: {
            apuestas: [
                {
                    "id": "5d640fe7116777329480b83f",
                    "valor_apostado": 50000.0,
                    "fechaApuesta": "2019-09-04T05:00:00.000+0000",
                    "estado_pago": "porconfirmar",
                    "idApostador": "5d640ec1116777329480b83e",
                    "idTarifa": "5d6fdfd1edc6c81cc0749354",
                    "tarifa": null
                },
                {
                    "id": "5d831f293fd60540f0259f96",
                    "valor_apostado": 640000.0,
                    "fechaApuesta": "2019-10-04T05:00:00.000+0000",
                    "estado_pago": "porconfirmar",
                    "idApostador": "5d640ec1116777329480b83e",
                    "idTarifa": "5d6fdfd1edc6c81cc0749354",
                    "tarifa": null
                },
                {
                    "id": "5d84c9b01a662521408cc7b3",
                    "valor_apostado": 45000.0,
                    "fechaApuesta": "2019-09-04T05:00:00.000+0000",
                    "estado_pago": "pagado",
                    "idApostador": "5d84c1e51a662546d86cdc8c",
                    "idTarifa": "5d6fdfd1edc6c81cc0749354",
                    "tarifa": null
                }
            ]
        }
    }
}


