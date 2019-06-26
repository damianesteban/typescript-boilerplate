const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = [...jsExtensions, tsExtensions];

module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions:  {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'import',
    'eslint-comments',
  ],
  env: {
    es6: true,
    'jest/globals': true,
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint-config-prettier', // must be last
  ],
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
        '@typescript-eslint/parser': tsExtensions
    },
    'import/resolver': {
      'typescript': {},
    }
  },
  rules:  {
    indent: ['error', 2],
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'no-undef': 'warn',
    'no-console': 'off',
    'no-undef': 'warn',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 0
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [{
    files: 'test/**/*.js',
    rules: {
        'typescript/no-use-before-define': 'warn',
        'typescript/no-unused-vars': 'warn',
    }
  }]
};


// module.exports =  {
//   parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
//   extends:  [
//     'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
//     'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
//     'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//  parserOptions:  {
//     ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
//     sourceType:  'module',  // Allows for the use of imports
//   },
//   rules:  {
//     "indent": ["error", 2]
//     // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
//     // e.g. "@typescript-eslint/explicit-function-return-type": "off",
//   },
// };