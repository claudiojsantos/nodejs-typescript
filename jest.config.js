const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
    rootDir: root,
    displayName: 'root-tests',
    testMarch: [ '<rootDir/src/**/*.test.ts' ],
    testEnvironment: 'node',
    clearMock: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1'
    },
};