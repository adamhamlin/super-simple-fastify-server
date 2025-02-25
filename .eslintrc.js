module.exports = {
    extends: ['@adamhamlin/eslint-config'],
    overrides: [
        {
            files: ['**/__tests__/**'],
            plugins: ['jest'],
            extends: ['plugin:jest/all'],
            rules: {
                'jest/prefer-expect-assertions': 'off',
                'jest/prefer-lowercase-title': 'off',
                'jest/max-expects': ['error', { max: 8 }],
                'jest/no-hooks': 'off',
                'jest/unbound-method': ['error', { ignoreStatic: true }],
                '@typescript-eslint/unbound-method': 'off', // disable in favor of jest/unbound-method
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-empty-function': 'off',
            },
        },
    ],
};
