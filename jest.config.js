module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts"
};