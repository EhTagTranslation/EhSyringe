import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['dist', 'releases', '*.config.{js,mjs,cjs}', '**/.*.\\{js,ts}', 'node_modules/'],
    },
    js.configs.recommended,
    ...ts.configs.recommendedTypeChecked,
    ...ts.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            '@typescript-eslint/consistent-type-definitions': 0,
            '@typescript-eslint/array-type': [
                1,
                {
                    default: 'array-simple',
                },
            ],
            '@typescript-eslint/explicit-function-return-type': [
                2,
                {
                    allowExpressions: true,
                },
            ],
            '@typescript-eslint/no-extraneous-class': [
                1,
                {
                    allowWithDecorator: true,
                    allowStaticOnly: true,
                },
            ],
            '@typescript-eslint/parameter-properties': [
                1,
                {
                    allow: ['protected readonly', 'private readonly', 'public readonly', 'readonly'],
                },
            ],
            'no-unused-vars': [0],
            '@typescript-eslint/no-unused-vars': [
                1,
                {
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/prefer-for-of': [1],
            '@typescript-eslint/prefer-function-type': [1],
            '@typescript-eslint/prefer-nullish-coalescing': [1],
            '@typescript-eslint/prefer-optional-chain': [1],
            'no-void': [
                1,
                {
                    allowAsStatement: true,
                },
            ],
            eqeqeq: [1, 'smart'],
        },
    },
    prettier,
];
