module.exports = {
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/packages/(?:.+?)/lib/'
    ],
    testURL: 'http://localhost/',
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        '\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    testRegex: '(/tests/.*.(test|spec)).(jsx?|tsx?|js?)$'
};
