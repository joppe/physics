const
    /**
     * Convert degrees to radians
     *
     * @param {number} degrees
     * @returns {number}
     */
    degreesToRadians = (degrees:number):number => {
        return degrees * (Math.PI / 180);
    },

    /**
     * Convert radians to degrees
     *
     * @param {number} radians
     * @returns {number}
     */
    radiansToDegrees = (radians:number):number => {
        return radians * (180 / Math.PI);
    };

/**
 * @class Angle
 */
class Angle {
    /**
     * @type {number}
     */
    private _rad:number;

    /**
     * @param {number} rad
     */
    constructor(rad:number) {
        this._rad = rad;
    }

    /**
     * @param {number} rad
     * @returns {Angle}
     */
    static fromRadians(rad:number) {
        return new Angle(rad);
    }

    /**
     * @param {number} deg
     * @returns {Angle}
     */
    static fromDegrees(deg:number) {
        return new Angle(degreesToRadians(deg));
    }
}

export {degreesToRadians, radiansToDegrees, Angle};
