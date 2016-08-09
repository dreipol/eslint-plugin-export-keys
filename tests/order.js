const exportKeys = require('../lib').default;
const orderRule = exportKeys.rules['export-keys/order'];
const orderConfig = exportKeys.configs.recommended.rules['export-keys/order'];
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();

const parserOptions = {
    ecmaVersion: 6,
    sourceType: 'module',
};

const error = { message: 'Make sure the object exported has the all the keys in the right order' };

describe('Check the keys order rule', function() {
    ruleTester.run('export-keys/order', orderRule, {
        // valid exports
        valid: [{
            code: `module.exports = { foo: 'foo', bar: 'bar' }`,
            options: orderConfig,
            parserOptions,
        },
        {
            code: `export default { foo: 'foo', bar: 'bar' }`,
            options: orderConfig,
            parserOptions,
        },
        {
            code: `export default { template: 'foo', bar: 'bar', data: 'data' }`,
            options: [2, { keys: ['template', 'data'] }],
            parserOptions,
        },
        {
            code: `export default { foo: 'foo', bar: 'bar' }`,
            options: [2, { keys: ['foo', 'bar'] }],
            parserOptions,
        }],
        // invalid exports
        invalid: [{
            code: `export default { foo: 'foo', bar: 'bar' }`,
            options: [2, { keys: ['bar', 'foo'] }],
            errors: [error],
            parserOptions,
        }, {
            code: `export default { foo: 'foo', bar: 'bar' }`,
            options: [2, { keys: ['bar', 'foo'] }],
            errors: [error],
            parserOptions,
        }, {
            code: `export default { template: 'foo', bar: 'bar', data: 'data' }`,
            options: [2, { keys: ['data', 'template'] }],
            errors: [error],
            parserOptions,
        }, {
            code: `module.exports = { template: 'foo', bar: 'bar', data: 'data' }`,
            options: [2, { keys: ['data', 'template'] }],
            errors: [error],
            parserOptions,
        },
        {
            code: `exports = { template: 'foo', bar: 'bar', data: 'data' }`,
            options: [2, { keys: ['data', 'template'] }],
            errors: [error],
            parserOptions,
        }],
    });
});

