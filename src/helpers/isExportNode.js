/**
 * Check whether a node is an export statement
 * @param { Node }  node - javascript program node
 *
 * It will match:
 *   export default {}
 *   module.exports = {}
 *   exports = {}
 *
 * @returns {Boolean}
 */
export default function isExportNode(node) {
    var parent = node.parent;
    switch (parent.type) {
        case 'ExportDefaultDeclaration':
            return true;
        case 'AssignmentExpression':
            var property = parent.left.property;
            var left = property ? parent.left.property : parent.left;
            return left.name === 'exports';
        default:
            return false;
    }
}
