/**
 * @class Point
 */
export class Point {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }

    /**
     * @returns {Point}
     */
    clone() {
        return new Point(this.x, this.y);
    }

    /**
     * @returns {string}
     */
    toString() {
        return `Point(x: ${this.x}, y: ${this.y})`;
    }
}
