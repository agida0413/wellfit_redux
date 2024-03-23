import {FETCH_CLOTH_LIST,FETCH_CLOTH_DETAIL} from "../actions/type";


const initialState={
    cloth_list:{},
    cloth_detail:{}
}

export default function(state=initialState,action){

    switch (action.type){
        case FETCH_CLOTH_LIST:
            return{
                ...state,
                cloth_list:action.payload
            }


        case FETCH_CLOTH_DETAIL:
            return {
                ...state,
                cloth_detail: action.payload
            }
        default:
            return state
    }
}