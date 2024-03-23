import {FETCH_CLOTH_LIST, FETCH_CLOTH_DETAIL, FETCH_BRAND_LIST} from "./type";
import axios from "axios";

export const cloth_list =(page,ss,category,sex)=>dispatch=>{
    axios.get('http://localhost/cloth/list',{
        params:{
            page:page,
            ss:ss,
            category:category,
            sex:sex
        }
    }).then(response=>{
        const actions={
            type:FETCH_CLOTH_LIST,
            payload:response.data
        }
         dispatch(actions)
    })
}

export const cloth_detail=(pno)=>dispatch=>{
    console.log('실행 디테일')
    axios.get('http://localhost/cloth/detail',{
      params:{
         pno:pno
      } , withCredentials: true
    }

    ).then(response=>{
        const action={
            type:FETCH_CLOTH_DETAIL,
            payload:response.data
        }

        dispatch(action)
    }

    ).catch(error => {
        console.error('Error fetching data:', error);
    });
}