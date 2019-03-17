const { defaults } = require(`jest-config`);

const puppeteerModes = [`acceptance`, `integration`, `visual`];
const { TEST_MODE } = process.env;
const PUPPETEER_MODE = puppeteerModes.includes(TEST_MODE);

const testMatchers = {
  integration: [`**/?(*.)+(integration).[tj]s?(x)`],
  visual: [`**/?(*.)+(visual).[tj]s?(x)`],
};

module.exports = {
  moduleFileExtensions: [
    `js`,
    `jsx`,
    `json`,
    `vue`,
  ],
  preset: PUPPETEER_MODE ? `jest-puppeteer` : defaults.preset,
  setupTestFrameworkScriptFile: `<rootDir>/test/setup/after-env.js`,
  snapshotSerializers: [
    `jest-serializer-vue`,
  ],
  testMatch: testMatchers[TEST_MODE] || defaults.testMatch,
  testURL: `http://localhost:8080`,
  transform: {
    '^.+\\.vue$': `vue-jest`,
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': `jest-transform-stub`,
    '^.+\\.jsx?$': `babel-jest`,
  },
};
