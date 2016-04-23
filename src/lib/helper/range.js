/**
 * @param {number} start
 * @param {number} end
 * @param {number} delta
 * @returns {Array}
 */
export function range(start, end, delta = 1) {
    let values = [],
        value = start,
        step = start < end ? delta : -delta,
        length = Math.abs(Math.floor((end - start) / step));

    for (let i = 0; i <= length; i += 1) {
        values.push(value);

        value += step;
    }

    return values;
}