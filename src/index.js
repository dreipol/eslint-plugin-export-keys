import orderRule from './rules/order';
import orderConfig from './config/order';

export default Object.freeze({
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
