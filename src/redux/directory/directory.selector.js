import { createSelector } from "reselect";

const selectDirectory = state => state.diretory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    diretory => diretory.sections
);