/**
 * @class Point
 */
class Point {
    /**
     * The x position
     *
     * @type {number}
     */
    private _x:number;

    /**
     * The y position
     *
     * @type {number}
     */
    private _y:number;

    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x:number, y:number) {
        this._x = x;
        this._y = y;
    }

    /**
     * Get the x position
     *
     * @returns {number}
     */
    get x():number {
        return this._x;
    }

    /**
     * Get the y position
     *
     * @returns {number}
     */
    get y():number {
        return this._y;
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    add(point:Point):Point {
        return new Point(this.x + point.x, this.y + point.y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @returns {Point}
     */
    move(x:number, y:number):Point {
        this._x += x;
        this._y += y;

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

    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static distance(a:Point, b:Point):number {
        let dx = b.x - a.x,
            dy = b.y - a.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}

export {Point};
