/**
 * @class Range
 */
class Range implements Iterable<number> {
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
    private _step:number;

    /**
     * @type {number}
     */
    private _pointer:number;

    /**
     * @param {number} min
     * @param {number} max
     * @param {number} step
     * @param {boolean} [align]
     */
    constructor(min:number, max:number, step:number, align:boolean = false) {
        if (min > max) {
            throw new Error(`Minimum must be smaller then maximum, min: ${min} max: ${max}`);
        }

        if (step <= 0) {
            throw new Error(`Step must be a positive number, step: ${step}`);
        }

        if (true === align) {
            this._min = min < 0 ? Math.ceil(min / step) * step : Math.floor(min / step) * step;
            this._max = max < 0 ? Math.ceil(max / step) * step : Math.floor(max / step) * step;
        } else {
            this._min = min;
            this._max = max;
        }

        this._step = step;
        this._pointer = 0;
    }

    /**
     * @returns {IteratorResult}
     */
    public next():IteratorResult<number> {
        let value:number = this._min + (this._step * this._pointer);

        if (value <= this._max) {
            this._pointer += 1;

            return <IteratorResult<number>>{
                done: false,
                value
            }
        } else {
            return <IteratorResult<number>>{
                done: true
            };
        }
    }

    /**
     * @returns {Range}
     */
    [Symbol.iterator]():IterableIterator<number> {
        return this;
    }
}

export {Range};
