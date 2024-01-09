/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns:[
      "/node_modules/",
    "/dist/",
    "/.git/",
    "/.vscode/",
    "/.github/",
    "/.idea/",
    "/.vs/",
    "/.yarn/",
    "/.yarnrc.yml",
    "/.yarnrc.yml",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};