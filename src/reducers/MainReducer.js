import {FETCH_CLOTH_DETAIL, FETCH_CLOTH_LIST, FETCH_MAIN_BOTTOM, FETCH_MAIN_MIDDLE} from "../actions/type";

const initialState={
    main_bottom:[],
    main_middle:[]
}


export default function(state=initialState,action){

    switch (action.type){
        case FETCH_MAIN_MIDDLE:
            return{
                ...state,
                main_middle:action.payload
            }


        case FETCH_MAIN_BOTTOM:
            return {
                ...state,
                main_bottom: action.payload
            }
        default:
            return state
    }
}