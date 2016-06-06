/**
 * Convert degrees to radians
 *
 * @param {number} degrees
 * @returns {number}
 */
function degreesToRadians(degrees:number):number {
    return degrees * (Math.PI / 180);
}

/**
 * Convert radians to degrees
 *
 * @param {number} radians
 * @returns {number}
 */
function radiansToDegrees(radians:number):number {
    return radians * (180 / Math.PI);
}

/**
 * @class Angle
 */
export class Angle {
    /**
     * The angle in radians
     */
    private angle:number;

    /**
     * @param {number} angle
     */
    constructor(angle:number) {
        this.angle = angle;
    }

    /**
     * Get the angle in radians
     *
     * @returns {number}
     */
    getRadians():number {
        return this.angle;
    }

    /**
     * Get the angle in degrees
     * 
     * @returns {number}
     */
    getDegrees():number {
        return radiansToDegrees(this.angle);
    }

    /**
     * @returns {Angle}
     */
    clone():Angle {
        return new Angle(this.angle);
    }

    /**
     * @param {number} degrees
     * @returns {Angle}
     */
    static fromDegrees(degrees:number):Angle {
        return new Angle(degreesToRadians(degrees));
    }

    /**
     * @returns {string}
     */
    toString():string {
        return `Angle(angle: ${this.angle.toFixed(5)} radians)`;
    }
}

export {degreesToRadians, radiansToDegrees};
