/**
 * Convert degrees to radians
 *
 * @param {number} degrees
 * @returns {number}
 */
const degreesToRadians = (degrees:number):number => {
    return degrees * (Math.PI / 180);
};

/**
 * Convert radians to degrees
 *
 * @param {number} radians
 * @returns {number}
 */
const radiansToDegrees = (radians:number):number => {
    return radians * (180 / Math.PI);
};

export {degreesToRadians, radiansToDegrees};
