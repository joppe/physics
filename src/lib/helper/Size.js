/**
 * @class Size
 */
export class Size {
    /**
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    /**
     * @returns {Size}
     */
    clone() {
        return new Size(this.width, this.height);
    }

    /**
     * @returns {string}
     */
    toString() {
        return `Size(width: ${this.width}, height: ${this.height})`;
    }
}
