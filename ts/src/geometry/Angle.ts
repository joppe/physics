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
     * @returns {number}
     */
    get radians():number {
        return this._rad;
    }

    /**
     * @returns {number}
     */
    get degrees():number {
        return radiansToDegrees(this._rad);
    }

    /**
     * @param {number} rad
     */
    constructor(rad:number) {
        this._rad = rad;
    }

    /**
     * @returns {Angle}
     */
    clone():Angle {
        return new Angle(this._rad);
    }

    /**
     * @returns {string}
     */
    toString():string {
        return `Angle(angle: ${this._rad.toFixed(5)} radians)`;
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
