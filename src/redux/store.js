import { configureStore } from "@reduxjs/toolkit";

const img = {
    imges:[],
    talbot:[]
}

export const addimg = (state = img , action) => {
    switch(action.type){
        case 'ADD-CARIMAGE':
            return{...state, imges:[...state.imges, action.payload]};
        case 'TALBOT':
            return{...state, talbot:[...state.talbot, action.payload]};
        default:
            return state;
    }
}

const store = configureStore({
    reducer:addimg,
})
export default store