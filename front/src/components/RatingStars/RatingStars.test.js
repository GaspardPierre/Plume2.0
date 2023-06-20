// Importation des bibliothèques nécessaires
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import RatingStars from './RatingStars';

// Test to check if a user can vote twice
test('To check if a user can vote twice', () => {
  // Initialing the component with false value
  const { getByRole } = render(
    <Provider store={store}>
      <RatingStars poemId={1} />
    </Provider>
  );

  // Getting the star button
  const star = getByRole('button');

  // Simulation of a click on the star
  fireEvent.click(star);

  // getting the state of the store after the first click
  const state = store.getState();

  // Checking if the user has already voted
  const userHasAlreadyVoted = state.average.averages.some(
    (avg) => avg.member_id === state.member.id && avg.work_id === 1
  );

  // IF the user has already voted, the test should pass
  expect(userHasAlreadyVoted).toBe(true);

  // Simulation of a second click on the star
  fireEvent.click(star);

  // GETTING the state of the store after the second click
  const newState = store.getState();

  // VérifY if the user has voted again
  const userHasVotedAgain = newState.average.averages.some(
    (avg) => avg.member_id === newState.member.id && avg.work_id === 1
  );

  // userHasVotedAgain should be true
  expect(userHasVotedAgain).toBe(true);

  // Vérification si le nombre de votes est le même après le deuxième clic
  const initialVotesCount = state.average.averages.filter(
    (avg) => avg.member_id === state.member.id && avg.work_id === 1
  ).length;
  const newVotesCount = newState.average.averages.filter(
    (avg) => avg.member_id === newState.member.id && avg.work_id === 1
  ).length;

  // Le nombre de votes ne devrait pas avoir changé
  expect(newVotesCount).toBe(initialVotesCount);
});
