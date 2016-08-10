import orderRule from './rules/order';
import orderConfig from './config/order';

export default Object.freeze({
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
