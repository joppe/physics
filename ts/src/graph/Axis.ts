const OFFSET = 30;

/**
 * @class Axis
 */
class Axis {
    /**
     * @type {number}
     */
    private _size:number;

    /**
     * @type {boolean}
     */
    private _invert:boolean;

    /**
     * @type {number}
     */
    private _min:number;

    /**
     * @type {number}
     */
    private _max:number;

    /**
     * @type {number}
     */
    private _scale:number;

    /**
     * @type {number}
     */
    private _origin:number;

    /**
     * @param {number} size
     * @param {boolean} [invert]
     */
    constructor(size:number, invert:boolean = false) {
        this._size = size - (2 * OFFSET);
        this._invert = invert;

        this.setRange(OFFSET, this._size - OFFSET);
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Axis}
     */
    setRange(min:number, max:number):Axis {
        this._min = min;
        this._max = max;
        this._scale = this._size / (this._max - this._min);
        this._origin = -this._min * this._scale;

        return this;
    }

    /**
     * @param {number} pos
     * @returns {number}
     */
    posToPixel(pos:number) {
        let pixel:number = pos * this._scale;

        if (true === this._invert) {
            pixel = this._origin - pixel;
        } else {
            pixel += this._origin;
        }

        return OFFSET + pixel;
    }

    /**
     * @returns {boolean}
     */
    isCentered():boolean {
        return 0 < this.origin && this._size > this.origin;
    }
}

export {Axis};
