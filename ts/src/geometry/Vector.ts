/**
 * @class Vector
 */
export class Vector {
    /**
     * @type {number}
     */
    private _x:number;

    /**
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
     * @returns {number}
     */
    get x():number {
        return this._x;
    }

    /**
     * @returns {number}
     */
    get y():number {
        return this._y;
    }

    /**
     * @returns {number}
     */
    get length():number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * @return number
     */
    get angle():number {
        return Math.atan2(this.y, this.x);
    }

    /**
     * @param {Vector} vector
     * @returns {Vector}
     */
    add(vector:Vector):Vector {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    /**
     * @param {Vector} vector
     * @returns {Vector}
     */
    subtract(vector:Vector):Vector {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    /**
     * @param {number} k
     * @returns {Vector}
     */
    multiply(k:number):Vector {
        return new Vector(k * this.x, k * this.y);
    }

    /**
     * @param {number} scale
     * @returns {Vector}
     */
    scale(scale:number):Vector {
        this._x *= scale;
        this._y *= scale;

        return this;
    }

    /**
     * @returns {Vector}
     */
    negate():Vector {
        return this.scale(-1);
    }

    /**
     * Create an unit vector, the same angle and length 1
     *
     * @returns {Vector}
     */
    unit():Vector {
        const length:number = this.length;

        if (0 !== length) {
            this.scale(1 / length);
        }

        return this;
    }

    /**
     * @param {Vector} vector
     * @returns {Vector}
     */
    incrementBy(vector:Vector):Vector {
        this._x += vector.x;
        this._y += vector.y;

        return this;
    }

    /**
     * @param {Vector} vector
     * @returns {Vector}
     */
    decrementBy(vector:Vector):Vector {
        this._x -= vector.x;
        this._y -= vector.y;

        return this;
    }

    /**
     * @param {Vector} vector
     * @returns {number}
     */
    dotProduct(vector:Vector):number {
        return this.x * vector.x + this.y * vector.y;
    }

    /**
     * @param {number} angle
     * @returns {Vector}
     */
    rotate(angle:number):Vector {
        let sum:number = this.angle + angle,
            length = this.length;

        this._x = length * Math.cos(sum);
        this._y = length * Math.sin(sum);

        return this;
    }

    /**
     * @returns {Vector}
     */
    clone():Vector {
        return new Vector(this.x, this.y);
    }

    /**
     * @returns {string}
     */
    toString():string {
        return `Vector(x: ${this.x}, y: ${this.y}, angle: ${this.angle}, length: ${this.length})`;
    }

    /**
     * @param {Vector} a
     * @param {Vector} b
     * @returns {number}
     */
    static angle(a:Vector, b:Vector):number {
        return Math.acos((a.dotProduct(b)) / (a.length * b.length));
    }

    /**
     * @param {Vector} a
     * @param {Vector} b
     * @returns {number}
     */
    static distance(a:Vector, b:Vector):number {
        return a.subtract(b).length;
    }
}
