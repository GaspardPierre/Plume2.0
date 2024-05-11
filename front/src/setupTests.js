// src/setupTests.js
jest.mock('redux-persist', () => {
    const realModule = jest.requireActual('redux-persist');
    return {
      ...realModule,
      persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
      persistStore: jest.fn().mockImplementation(store => store)
    };
  });
  
  jest.mock('./api.js', () => {
    return {
      default: {
        get: jest.fn(),
        post: jest.fn(),
        // Mock other methods as needed
      }
    };
  });
  