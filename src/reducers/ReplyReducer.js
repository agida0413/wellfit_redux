import {FETCH_REPLY_NORMAL_LIST, FETCH_REPLY_INSERT, FETCH_REPLY_DELETE, FETCH_REPLY_UPDATE} from "../actions/type";

const initialState={
  reply_normal:{},
  insertCheck:'',
   deleteCheck:'',
    updateCheck:''
}


export default function(state=initialState,action){

    switch (action.type){
        case FETCH_REPLY_NORMAL_LIST:
            return{
                ...state,
                reply_normal:action.payload
            }
        case FETCH_REPLY_INSERT:
            return{
                ...state,
                insertCheck:action.payload
            }
        case FETCH_REPLY_DELETE:
            return{
                ...state,
                deleteCheck:action.payload
            }

        case FETCH_REPLY_UPDATE:
            return{
                ...state,
                updateCheck:action.payload
            }

        default:
            return state
    }
}

