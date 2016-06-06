/**
 * @class Point
 */
export class Point {
    /**
     * The x position
     *
     * @type {number}
     */
    private x:number;

    /**
     * The y position
     *
     * @type {number}
     */
    private y:number;

    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Get the x position
     *
     * @returns {number}
     */
    getX():number {
        return this.x;
    }

    /**
     * Get the y position
     *
     * @returns {number}
     */
    getY():number {
        return this.y;
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    add(point:Point):Point {
        return new Point(this.x + point.getX(), this.y + point.getY());
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    move(point:Point):Point {
        this.x += point.getX();
        this.y += point.getY();

        return this;
    }

    /**
     * @returns {Point}
     */
    clone():Point {
        return new Point(this.x, this.y);
    }

    /**
     * @returns {string}
     */
    toString():string {
        return `Point(x: ${this.x}, y: ${this.y})`;
    }
}
