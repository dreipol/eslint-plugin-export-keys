import isExportNode from '../helpers/isExportNode';

export default Object.freeze({
    create(context) {
        const KEYS_LIST = context.options[0] || [];

        return {
            /**
             * Check only the ObjectExpressions
             * @param { Node } node - program node
             */
            ObjectExpression: function(node) {
                // check whether this object is also an export statement
                if (isExportNode(node) && KEYS_LIST.length) {
                    let keysExported = node.properties.map(p => p.key.name);
                    // it will cache the items index position compared to the KEYS_LIST array
                    let keysPositions = [];
                    // This array will contain all the keys wrongly positioned in the following form:
                    // [previous node, node wrongly positioned]
                    let keysOffPosition = keysExported.reduce(function (arr, key, i) {
                        // get the item index used to compare the nodes positions on each loop
                        let itemPosition = KEYS_LIST.indexOf(key);

                        if (~itemPosition) {
                            let previousItem = keysPositions[keysPositions.length - 1];

                            // if it's the first key we can not compare to the previous key
                            if (i && previousItem && previousItem[0] > itemPosition) {
                                // collect all the nodes that seem to have the wrong position
                                // compared to their direct previous sibling
                                arr.push([node.properties[previousItem[1]], node.properties[i]]);
                            }

                            // cache the position of the current item
                            // to compare it to the next one in the next loop
                            keysPositions.push([itemPosition, i]);
                        }
                        return arr;
                    }, []);

                    // check if the keys order is correct
                    if (keysOffPosition.length) {
                        keysOffPosition.forEach(([prevNode, currentNode]) => {
                            context.report({
                                node: currentNode,
                                message: `The key "${ currentNode.key.name }" should preceed "${ prevNode.key.name }"`,
                            });
                        });
                    }
                }

                return node;
            },
        };
    },
});
