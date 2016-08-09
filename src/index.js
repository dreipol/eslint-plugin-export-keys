import orderRule from './rules/order';
import orderConfig from './config/order';

export default Object.freeze({
    rules: {
        'export-keys/order': orderRule,
    },
    configs: {
        recommended: {
            rules: {
                'export-keys/order': orderConfig,
            },
        },
    },
});
