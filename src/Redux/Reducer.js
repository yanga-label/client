import InitialState from "./State";

export const Reducer = (state=InitialState, action) => {
    switch(action.type){
        
        default:
            return {
                ...state
            }
    }
}