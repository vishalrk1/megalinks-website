import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import directoryReducer from "./directory/directory.reducer";
import categoryReducer from "./category-items/category-items.reducer";
import exploreReducer from "./explore-page-data/explore.reducer";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    directory: directoryReducer,
    category: categoryReducer,
    dataPacks: exploreReducer,
});


export default persistReducer(persistConfig, rootReducer);