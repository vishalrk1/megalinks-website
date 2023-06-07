import { exploreDataTypex } from "./explore.types"

const INITIAL_STATE = {
    scenepackData : [],
    presetPacksData : [],
    tutorialData : [],
    animedataData : [],
    projectfileData : [],
};

const exploreReducer = ( state=INITIAL_STATE, action) => {
    switch(action.type){
        case(exploreDataTypex.GET_EACH_CATEGORY_DATA):
            return {
                ...state,
                ...action.payload, 
            }
        default:
            return state
    };
};

export default exploreReducer;