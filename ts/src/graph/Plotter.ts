import {Point} from './../geometry/Point';

/**
 * @interface PlottableFunctionInterface
 */
interface PlottableFunctionInterface {
    /**
     * @param {number} x
     * @returns {number}
     */
    (x:number):number;
}

/**
 * @class Plotter
 */
class Plotter implements Iterable<Point> {
    /**
     * @type {Function}
     */
    private _func:PlottableFunctionInterface;

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
     * @param {Function} func
     * @param {number} min
     * @param {number} max
     * @param {number} step
     */
    constructor(func:PlottableFunctionInterface, min:number, max:number, step:number) {
        if (min > max) {
            throw new Error(`Minimum must be smaller then maximum, min: ${min} max: ${max}`);
        }

        if (step <= 0) {
            throw new Error(`Step must be a positive number, step: ${step}`);
        }

        this._func = func;
        this._min = min;
        this._max = max;
        this._step = step;
        this._pointer = 0;
    }

    /**
     * @returns {IteratorResult}
     */
    public next():IteratorResult<Point> {
        let x:number = this._min + (this._step * this._pointer);

        if (x <= this._max) {
            let y:number = this._func(x);

            this._pointer += 1;

            return <IteratorResult<Point>>{
                done: false,
                value: new Point(x, y)
            }
        } else {
            return <IteratorResult<Point>>{
                done: true
            };
        }
    }

    /**
     * @returns {Range}
     */
    [Symbol.iterator]():IterableIterator<Point> {
        return this;
    }
}

export {Plotter};
