import {FETCH_BRAND_LIST,FETCH_BRAND_DETAIL} from "./type";
import axios from "axios";

export const brandActionList=(ss,page)=>dispatch=>{

    axios.get('http://localhost/brand/list',{

        params:{
            ss:ss,
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_BRAND_LIST,
            payload:response.data
        }

        dispatch(action)
    })
}

export const brandActionDetail=(page,bno)=>dispatch=>{

    axios.get('http://localhost/brand/detail',{

        params:{
            page:page,
            bno:bno
        }
    }).then(response=>{
        const action={
            type:FETCH_BRAND_DETAIL,
            payload:response.data
        }

        dispatch(action)
    })
}