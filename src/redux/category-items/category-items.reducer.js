import { categoryTypes } from "./category-items.types";

const INITIAL_STATE = {
    categories: null,
}

const categoryReducer = (state=INITIAL_STATE, action) => {
    console.log(`updating`);
    switch(action.type){
        case categoryTypes.SET_CATEGORIES:
            console.log(action.payload);
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state
    };
};

export default categoryReducer;



