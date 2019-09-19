import axios from 'axios';
import {SIGN_IN,SIGN_UP} from '../types'
import {SignIn, SignUp} from '../utils/misc'
export function signUp(data) {
    const request =axios({

        method:'POST',
        url:SignIn,
        data:{
            email:data.email,
            password:data.password
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>{
        console.log(response)
       return {
        IdApostador: "5d640ec1116777329480b83e",
        Nombres: "Carlos Alberto",
        Apellidos:"Benavidez Vega",
        Correo: "carlos.benavidez@udea.edu.co",
        Fecha_nacimiento:"2019-09-04T05:00:00.000+00:00",
        token:113414
       }
        // return response.data
    }).catch(err=>{
        return {
            IdApostador: "5d640ec1116777329480b83e",
            Nombres: "Carlos Alberto",
            Apellidos:"Benavidez Vega",
            Correo: "carlos.benavidez@udea.edu.co",
            Fecha_nacimiento:"2019-09-04T05:00:00.000+00:00",
            token:113414
           }
        
        //return false;
    })


    return {
        type: SIGN_UP,
        payload:request
    }
}

export function signIn(data) {

    const request =axios({

        method:'POST',
        url:SignUp,
        data:{
            email:data.email,
            password:data.password
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response=>{
        console.log(response)
       return {
        IdApostador: "5d640ec1116777329480b83e",
        Nombres: "Carlos Alberto",
        Apellidos:"Benavidez Vega",
        Correo: "carlos.benavidez@udea.edu.co",
        Fecha_nacimiento:"2019-09-04T05:00:00.000+00:00",
        token:113414
       }
        // return response.data
    }).catch(err=>{
        console.log("pasososso")
        return {
            IdApostador: "5d640ec1116777329480b83e",
            Nombres: "Carlos Alberto",
            Apellidos:"Benavidez Vega",
            Correo: "carlos.benavidez@udea.edu.co",
            Fecha_nacimiento:"2019-09-04T05:00:00.000+00:00",
            token:113414
           }
        
        //return false;
    })
    return {
        type: SIGN_IN,
        payload:request
    }

}