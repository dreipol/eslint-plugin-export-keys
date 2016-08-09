import isSequential from '../helpers/isSequential';
import isExportNode from '../helpers/isExportNode';
import getIndexesByKeysList from '../helpers/getIndexesByKeysList';

export default {
    create(context) {
        const OPTS = context.options[1] || {};
        const KEYS_LIST = OPTS.keys || [];

        return {
            /**
             * Check only the ObjectExpressions
             * @param { Node } node - program node
             */
            ObjectExpression: function(node) {
                // check whether this object is also an export statement
                if (isExportNode(node) && KEYS_LIST.length) {
                    let keysExported = node.properties.map(p => p.key.name);
                    let keysIndexes = getIndexesByKeysList(keysExported, KEYS_LIST);

                    // check if the keys order is correct
                    if (keysIndexes.length > 1 && !isSequential(keysIndexes)) {
                        context.report(node, 'Make sure the object exported has the all the keys in the right order');
                    }
                }

                return node;
            },
        };
    },
};
