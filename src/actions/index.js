import {url} from '../config'
import axios from 'axios';
export function getArticles(){
    const request =axios.get(`${url}/posts/`)
    .then(response=> {
        return response.data
    })

    return {
        type: 'GET_ARTICLES',
        payload: request
    }


}