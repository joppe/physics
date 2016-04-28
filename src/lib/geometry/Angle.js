/**
 * @param {number} degrees
 * @returns {number}
 */
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * @param {number} radians
 * @returns {number}
 */
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

/**
 * @class Angle
 */
export class Angle {
    /**
     * @param {number} angle
     */
    constructor(angle) {
        this.angle = angle;
    }

    /**
     * @returns {Angle}
     */
    clone() {
        return new Angle(this.angle);
    }

    /**
     * @param {number} degrees
     * @returns {Angle}
     */
    static fromDegrees(degrees) {
        return new Angle(degreesToRadians(degrees));
    }

    /**
     * @returns {string}
     */
    toString() {
        return `Angle(angle: ${this.angle} radians)`;
    }
}

export {degreesToRadians, radiansToDegrees};
