import orderRule from './rules/order';
import orderConfig from './config/order';

module.exports = exports.default = Object.freeze({
    meta: { /* stuff */ },
    rules: {
        order: orderRule,
    },
    configs: {
        recommended: {
            rules: {
                'export-keys/order': orderConfig,
            },
        },
    },
});
