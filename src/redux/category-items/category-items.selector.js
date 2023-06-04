import { createSelector } from 'reselect';

const selectCategory = (state) => state.category;

export const selectAllCatogries = createSelector(
    [selectCategory],
    (categoryState) => categoryState.categories
);