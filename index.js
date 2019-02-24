module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'react/no-danger': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-named-as-default': 'off',
    'consistent-return': 'off',
    'react/no-unused-state': 'off',
    'no-useless-escape': 'off',
    'jsx-a11y/label-has-for': 'off',
    'arrow-body-style': 'off',
    'no-shadow': 'off',
    'no-prototype-builtins': 'off',
    'no-alert': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
  },
};
