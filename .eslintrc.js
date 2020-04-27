module.exports = {
  extends: ["airbnb", "react-app"],
  rules: {
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': "off",
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/setupTests.js', '**/*.test.js']}],
  },
};
