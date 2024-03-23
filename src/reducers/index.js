import {combineReducers} from "redux";
import BrandReducer from "./BrandReducer";
import ClothReducer from "./ClothReducer";
import MainReducer from "./MainReducer";
import boardReducer from "./boardReducer";
import replyReducer from "./ReplyReducer";

export default combineReducers({
    brands:BrandReducer,
    cloths:ClothReducer,
    mains:MainReducer,
    boards:boardReducer,
    replys:replyReducer



})