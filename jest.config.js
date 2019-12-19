module.exports = {
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
        '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', '.html', '.mdx'],
};
