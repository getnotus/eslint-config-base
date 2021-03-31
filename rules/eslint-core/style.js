module.exports = {
  rules: {
    // require camel case names
    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      { properties: 'never', ignoreDestructuring: false, ignoreImports: false },
    ],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    // TODO: Enable when this gets addressed: https://github.com/eslint/eslint/issues/13229
    'capitalized-comments': [
      'off',
      'always',
      {
        ignorePattern: '@ts',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    ],

    // enforces consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': ['warn', 'self'],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': ['error', 'as-needed', { generators: 'as-needed' }],

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: allowArrowFunctions true? (less strict)
    'func-style': ['warn', 'declaration', { allowArrowFunctions: false }],

    // Blacklist certain identifiers to prevent them being used
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    // https://eslint.org/docs/rules/id-length
    'id-length': ['error', { min: 2, properties: 'always', exceptions: [] }],

    // Enforce empty lines between multi-line class members (like method definitions),
    // but not between single line class members (like properties on a database model).
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    // specify the maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': 'off',

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',

    // specify the maximum depth callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['warn', { max: 2 }],

    // limits the number of parameters that can be used in the function declaration.
    // https://eslint.org/docs/rules/max-params
    'max-params': ['warn', { max: 3 }],

    // specify the maximum number of statement allowed in a function
    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['warn', 'separate-lines'],

    // require a capital letter for constructors
    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: true,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
        properties: false,
      },
    ],

    // disallow use of the Array constructor
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': ['error', { allow: [] }],

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',

    // disallow comments inline after code
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'warn',

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    // TODO: Disable?
    'no-negated-condition': 'warn',

    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    // TODO: Enable more rules here?
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // TODO: enable?
      // {
      //   selector: 'ForOfStatement',
      //   message:
      //     'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      {
        selector:
          "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
        message: 'setTimeout must always be invoked with two arguments.',
      },
    ],

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'warn',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: true,
      },
    ],

    // disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // allow just one var statement per function
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],

    /* DISABLED RULES */
    // These rules are disabled by default for Prettier, but can be enabled (if careful).
    // If they are enabled, they will be enabled in prettier.js.
    'lines-around-comment': 'off',
    'max-len': 'off',
    'no-mixed-operators': 'off',
    'no-tabs': 'off',
    quotes: 'off',

    // These rules never need to be enabled when using Prettier
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-regex': 'off',

    // requires function names to match the name of the variable or property to which they are assigned
    // When would you use this rule?
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'off',

    // require identifiers to match the provided regular expression
    // https://eslint.org/docs/rules/id-match
    // @typescript-eslint/naming-convention is much more configurable
    'id-match': 'off',

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // Mostly taken care of by no-inline-comments
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
      },
    ],

    // disallow the use of ternary operators
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    // TODO: Enable?
    'padding-line-between-statements': 'off',

    // requires object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',
  },

  overrides: [
    {
      files: ['test/**/*.test.ts'],
      rules: {
        // For our test files, the pattern is to have unnamed functions
        // https://eslint.org/docs/rules/func-names
        'func-names': 'off',

        // We use `const var = function expression` in tests to wrap functions that we expect to throw an error
        'func-style': 'off',

        // describe blocks count as a function in Mocha tests, and can be insanely long
        'max-lines-per-function': 'off',

        // Mocha nests callbacks using describe(it())
        'max-nested-callbacks': ['warn', { max: 3 }],

        // It's reasonable for describe blocks to have a large number of tests
        'max-statements': ['warn', 20, { ignoreTopLevelFunctions: true }],
      },
    },
  ],
}
