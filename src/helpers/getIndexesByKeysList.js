/**
 * Having an array of keys we compare it to another list to find out
 * the keys of the first in which order appear in the second one
 * 4 ex:
 *   keys = ['baz', 'foo', 'bar']
 *   keyList = ['foo', 'bar', 'baz']
 *   returns [2, 0, 1]
 *
 * IMPORTANT: we skip all the keys that are not present in both lists
 *
 * @param   { Array } keys - test list
 * @param   { Array } keysMap - look up list
 * @returns { Array }
 */
export default function getKeysIndexesByKeysList(keys, keysMap) {
    return keys.reduce((list, key, i) => {
        if (keysMap.includes(key)) {
            list.push(keysMap.indexOf(key));
        }
        return list;
    }, []);
}
