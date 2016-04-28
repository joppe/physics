/**
 * @class Vector
 */
export class Vector {
    /**
     * @param {Size} length
     * @param {Angle} angle
     */
    constructor(length, angle) {
        this.length = length;
        this.angle = angle;
    }

    /**
     * @returns {number}
     */
    get x() {
        return Math.cos(this.angle.angle).toFixed(10) * this.length;
    }

    /**
     * @returns {number}
     */
    get y() {
        return Math.sin(this.angle.angle).toFixed(10) * this.length;
    }

    /**
     * @returns {Vector}
     */
    clone() {
        return new Vector(this.length, this.angle.clone());
    }

    /**
     * @returns {string}
     */
    toString() {
        return `Vector(length: ${this.length}, angle: ${this.angle})`;
    }
}
