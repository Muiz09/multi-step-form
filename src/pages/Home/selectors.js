import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInfoState = (state) => state.home || initialState;

export const selectInfo = createSelector(selectInfoState, (state) => state.info);
