module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['jest.config.js', 'coverage'],
  verbose: true,
  testURL: 'http://localhost/',
};
