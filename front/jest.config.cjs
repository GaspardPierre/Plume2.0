// jest.config.cjs
const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(redux-persist)/)'
  ],
  setupFiles: [
    '<rootDir>/src/setupTests.js'
  ],
  setupFilesAfterEnv: [
    path.resolve(__dirname, './node_modules/@testing-library/jest-dom/dist/index.js')
  ],
  globals: {
    window: {},
    document: {}
  }
};
