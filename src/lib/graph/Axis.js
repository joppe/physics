import {Point} from './../physics/Point.js';

/**
 * @class Axis
 */
export class Axis {
    /**
     * @param {number} size
     * @param {boolean} [invert]
     */
    constructor(size, invert = false) {
        this.size = size;
        this.invert = invert;

        this.origin = new Point(0, 0);
        this.scale = 1;
        this.min = 0;
        this.max = size;
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Axis}
     */
    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.scale = this.size / (max - min);
        this.origin = -min * this.scale;

        return this;
    }

    /**
     * @param {number} pos
     * @returns {number}
     */
    posToPixel(pos) {
        let pixel = pos * this.scale;

        if (true === this.invert) {
            pixel = this.origin - pixel;
        } else {
            pixel += this.origin;
        }

        return pixel;
    }

    /**
     * @returns {boolean}
     */
    isCentered() {
        return 0 < this.origin && this.size > this.origin;
    }
}
