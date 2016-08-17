const OFFSET = 30;

/**
 * @class Axis
 */
export class Axis {
    /**
     * @param {number} size
     * @param {boolean} [invert]
     */
    constructor(size, invert = false) {
        this.size = size - (2 * OFFSET);
        this.invert = invert;

        this.setRange(OFFSET, this.size - OFFSET);
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Axis}
     */
    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.scale = this.size / (this.max - this.min);
        this.origin = -this.min * this.scale;

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

        return OFFSET + pixel;
    }

    /**
     * @returns {boolean}
     */
    isCentered() {
        return 0 < this.origin && this.size > this.origin;
    }
}
