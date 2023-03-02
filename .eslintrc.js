module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'airbnb',
        'prettier',
        'plugin:storybook/recommended'
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'eslint-plugin-prettier',
        'i18next',
        'react-hooks'
    ],
    rules: {
        'prettier/prettier': 'warn',
        'no-console': 'warn',
        indent: [2, 4],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
        ],
        'react/require-default-props': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'import/no-unresolved': 'off',
        'no-unused-vars': 'warn',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-underscore-dangle': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'to',
                    'data-testid',
                    'ariaLabel',
                    'wrapperClass'
                ]
            }
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true }
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    },
    globals: {
        __IS_DEV__: true
    }
};
