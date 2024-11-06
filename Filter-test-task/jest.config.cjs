module.exports = {
        testEnvironment: 'jsdom',
        testMatch: [
            "**/?(*.)+(spec|test).[tj]s?(x)"
        ],
        moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
        setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    };