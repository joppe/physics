/**
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {Array}
 */
export function range(start, end, step = 1) {
    let values = [],
        value = start,
        length = Math.max(Math.ceil((end - start) / step));

    for (let i = 0; i <= length; i += 1) {
        values.push(value);

        value += step;
    }

    return values;
}