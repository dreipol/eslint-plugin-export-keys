const exportKeys = require('../lib');
const orderRule = exportKeys.rules['order'];
const orderConfig = exportKeys.configs.recommended.rules['export-keys/order'];
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();

const parserOptions = {
    ecmaVersion: 6,
    sourceType: 'module',
};

const error = (prev, curr) => {
    return {
        message: `The key "${ curr }" should preceed "${ prev }"`,
    };
};

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
        options: [['template', 'data']],
        parserOptions,
    },
    {
        code: `export default { foo: 'foo', bar: 'bar' }`,
        options: [['foo', 'bar']],
        parserOptions,
    }],
    // invalid exports
    invalid: [{
        code: `export default { foo: 'foo', bar: 'bar' }`,
        options: [['bar', 'foo']],
        errors: [error('foo', 'bar')],
        parserOptions,
    }, {
        code: `export default { foo: 'foo', bar: 'bar' }`,
        options: [['bar', 'foo']],
        errors: [error('foo', 'bar')],
        parserOptions,
    }, {
        code: `export default { template: 'foo', bar: 'bar', data: 'data' }`,
        options: [['data', 'template']],
        errors: [error('template', 'data')],
        parserOptions,
    }, {
        code: `module.exports = { template: 'foo', bar: 'bar', data: 'data' }`,
        options: [['data', 'template']],
        errors: [error('template', 'data')],
        parserOptions,
    },
    {
        code: `module.exports = { template: 'foo', bar: 'bar', data: 'data' }`,
        options: [['data', 'bar', 'template']],
        errors: [
            error('template', 'bar'),
            error('bar', 'data'),
        ],
        parserOptions,
    },
    {
        code: `exports = { template: 'foo', bar: 'bar', data: 'data' }`,
        options: [['data', 'template']],
        errors: [error('template', 'data')],
        parserOptions,
    }],
});


