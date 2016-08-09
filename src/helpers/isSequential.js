/**
 * Check if the list of numbers is sequential
 * @param   { Array } list - list of numbers
 * @returns {Boolean}
 */
export default function isSequential(list) {
    return list.every(function(n, i, aa) {
        return !i || aa[i - 1] < n;
    });
}
