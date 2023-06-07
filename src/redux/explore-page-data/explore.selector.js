import { createSelector } from "reselect";

const selectCatData = state => state.dataPacks;

export const selectAllcatData = createSelector(
    [selectCatData],
    (dataPackState) => dataPackState,
);
