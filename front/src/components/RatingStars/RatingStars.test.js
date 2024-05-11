// Import libraries
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore'; // Ensure this imports a function to configure the store
import RatingStars from './RatingStars';

// Test to check if a user can vote twice
test('To check if a user can vote twice', async () => {
  // Initialize the Redux store
  const store = configureStore(); // Make sure this sets up the initial state as expected

  // Render the component within the Provider
  const { getByRole } = render(
    <Provider store={store}>
      <RatingStars poemId={1} />
    </Provider>
  );

  // Get the star button
  const starButton = getByRole('button', { name: /star/i }); // Adjust the role or name to match your actual button

  // Simulate a click on the star button
  fireEvent.click(starButton);

  // Wait for any state updates that occur as a result of the click
  await waitFor(() => {
    const stateAfterFirstClick = store.getState();
    expect(stateAfterFirstClick.average.averages.some(
      avg => avg.member_id === stateAfterFirstClick.member.id && avg.work_id === 1
    )).toBe(true);
  });

  // Simulate a second click on the star button
  fireEvent.click(starButton);

  // Check the state after the second click
  await waitFor(() => {
    const newState = store.getState();
    const userHasVotedAgain = newState.average.averages.some(
      avg => avg.member_id === newState.member.id && avg.work_id === 1
    );
    expect(userHasVotedAgain).toBe(true);

    const initialVotesCount = newState.average.averages.filter(
      avg => avg.member_id === newState.member.id && avg.work_id === 1
    ).length;
    expect(initialVotesCount).toBe(1); // Assuming that the user cannot vote twice, the count should still be 1
  });
});
