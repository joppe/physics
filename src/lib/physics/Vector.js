import {Angle} from './Angle.js';

/**
 * @class Vector
 */
export class Vector {
    /**
     * @param {Size} size
     * @param {Angle} angle
     */
    constructor(size, angle) {
        this.size = size;
        this.angle = angle;
    }

    /**
     * @returns {number}
     */
    get x() {
        return Math.cos(this.angle.angle).toFixed(10) * this.size;
    }

    /**
     * @returns {number}
     */
    get y() {
        return Math.sin(this.angle.angle).toFixed(10) * this.size;
    }

    /**
     * @returns {Vector}
     */
    clone() {
        return new Vector(this.size, this.angle.clone());
    }

    /**
     * @returns {string}
     */
    toString() {
        return `Vector(size: ${this.size}, angle: ${this.angle})`;
    }
}
