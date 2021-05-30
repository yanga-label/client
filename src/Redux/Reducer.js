import InitialState from "./State";
import {
    TOGGLE_MENU,
} from "./Types"

export const Reducer = (state=InitialState, action) => {
    switch(action.type){

        case TOGGLE_MENU:
            return{
                ...state,
                isMenuOpen: action.payload
            }
        
        default:
            return {
                ...state
            }
    }
}