
import axios from "axios";
import {FETCH_MAIN_BOTTOM, FETCH_MAIN_MIDDLE} from "./type";

export const main_bottom =()=>dispatch=>{
    axios.get('http://localhost/main/bottom').then(response=>{
        const actions={
            type:FETCH_MAIN_BOTTOM,
            payload:response.data
        }
        dispatch(actions)
    })
}

export const main_middle=()=>dispatch=>{

    axios.get('http://localhost/main/middle'

    ).then(response=>{
            const action={
                type:FETCH_MAIN_MIDDLE,
                payload:response.data
            }

            dispatch(action)
        }

    )
}