// selectors.js
import { createSelector } from 'reselect';

const selectWorkState = state => state.work;

export const selectPoems = createSelector(
  [selectWorkState],
  workState => workState.works
);

export const selectWorkStatus = createSelector(
  [selectWorkState],
  workState => workState.status
);
