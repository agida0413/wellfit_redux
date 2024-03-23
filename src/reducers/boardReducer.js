import {BOARD_LIST, BOARD_INSERT, BOARD_DETAIL, BOARD_UPDATE_DATA, BOARD_UPDATE, BOARD_DELETE}
    from "../actions/type";
const boardState={
    board_list:{},
    result:'',
    update_data:{}
}

export default function(state=boardState,action){
    switch (action.type)
    {
        case BOARD_LIST:
            return {
                ...state,
                board_list: action.payload
            }
        case BOARD_INSERT:
            return {
                ...state,
                result:action.payload
            }
        case BOARD_DETAIL:
            return {
                ...state, //기존의 state는 유지
                board_detail: action.payload
            }
        case BOARD_DELETE:
            return {
                ...state,
                result: action.payload
            }
        case BOARD_UPDATE_DATA:
            return {
                ...state,
                update_data: action.payload
            }
        case BOARD_UPDATE:
            return {
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}