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

export const selectLatestWork = createSelector(
  [selectWorkState],
  workState => workState.latestWork
);

export const selectPoemById = createSelector(
  [selectPoems, (_, poemId) => poemId],
  (poems, poemId) => poems.find(poem => poem.id === poemId)
);