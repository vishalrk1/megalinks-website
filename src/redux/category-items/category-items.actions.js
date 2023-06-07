import { categoryTypes } from "./category-items.types";

export const updateCategories = (collectionMap) => ({
    type: categoryTypes.SET_CATEGORIES,
    payload: collectionMap
});
