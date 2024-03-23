import {FETCH_BRAND_LIST,FETCH_BRAND_DETAIL} from "../actions/type";


const initialState={
brand_list:{},
    brand_detail:{}
}

export default function(state=initialState,action){

    switch (action.type){
        case FETCH_BRAND_LIST:
            return{
                ...state,
                brand_list:action.payload
            }


        case FETCH_BRAND_DETAIL:
            return {
                ...state,
                brand_detail: action.payload
            }
        default:
            return state
    }
}