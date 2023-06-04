import { exploreDataTypex } from "./explore.types";

export const updateAllRespectiveCategoryData = (dataObj) => ({
    type: exploreDataTypex.GET_EACH_CATEGORY_DATA,
    payload: dataObj,
});



