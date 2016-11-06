import {Point} from './../geometry/Point';

/**
 * @interface TransformOptions
 */
interface TransformOptions {
    /**
     * @type {number}
     */
    xScale:number;

    /**
     * @type {number}
     */
    yScale:number;

    /**
     * @type {number}
     */
    xSkew:number;

    /**
     * @type {number}
     */
    ySkew:number;

    /**
     * @type {number}
     */
    xTranslate:number;

    /**
     * @type {number}
     */
    yTranslate:number;
}

const DEFAULT_MATRIX_OPTIONS:TransformOptions = <TransformOptions>{
    xScale: 1,
    yScale: 1,
    xSkew: 0,
    ySkew: 0,
    xTranslate: 0,
    yTranslate: 0
};

/**
 * @class Matrix
 */
class Matrix {
    /**
     * @type {number}
     */
    private _xScale:number;

    /**
     * @type {number}
     */
    private _yScale:number;

    /**
     * @type {number}
     */
    private _xSkew:number;

    /**
     * @type {number}
     */
    private _ySkew:number;

    /**
     * @type {number}
     */
    private _xTranslate:number;

    /**
     * @type {number}
     */
    private _yTranslate:number;

    /**
     * @returns {number}
     */
    get xScale():number {
        return this._xScale;
    }

    /**
     * @returns {number}
     */
    get yScale():number {
        return this._yScale;
    }

    /**
     * @returns {number}
     */
    get xSkew():number {
        return this._xSkew;
    }

    /**
     * @returns {number}
     */
    get ySkew():number {
        return this._ySkew;
    }

    /**
     * @returns {number}
     */
    get xTranslate():number {
        return this._xTranslate;
    }

    /**
     * @returns {number}
     */
    get yTranslate():number {
        return this._yTranslate;
    }

    /**
     * Constructor
     */
    constructor() {
        this.identity();
    }

    /**
     * @returns {Matrix}
     */
    identity():Matrix {
        this._xScale = 1;
        this._yScale = 1;
        this._xSkew = 0;
        this._ySkew = 0;
        this._xTranslate = 0;
        this._yTranslate = 0;

        return this;
    }

    /**
     * @param {object} options
     * @returns {Matrix}
     */
    transform(options:TransformOptions):Matrix {
        let xScale = this._xScale,
            yScale = this._yScale,
            xSkew = this._xSkew,
            ySkew = this._ySkew,
            xTranslate = this._xTranslate,
            yTranslate = this._yTranslate;

        this._xScale = xScale * options.xScale + xSkew * options.ySkew;
        this._yScale = yScale * options.yScale + ySkew * options.xSkew;
        this._xSkew = xScale * options.xSkew + xSkew * options.yScale;
        this._ySkew = ySkew * options.xScale + yScale * options.ySkew;
        this._xTranslate = xScale * options.xTranslate + xSkew * options.yTranslate + xTranslate;
        this._yTranslate = yScale * options.yTranslate + ySkew * options.xTranslate + yTranslate;

        return this;
    }

    /**
     * @param {number} radians
     * @returns {Matrix}
     */
    rotate(radians:number):Matrix {
        let cos = Math.cos(radians),
            sin = Math.sin(radians);

        this.transform({
            xScale: cos,
            yScale: cos,
            xSkew: -sin,
            ySkew: sin,
            xTranslate: 0,
            yTranslate: 0
        });

        return this;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @returns {Matrix}
     */
    scale(x:number, y:number):Matrix {
        this.transform({
            xScale: x,
            yScale: y,
            xSkew: 0,
            ySkew: 0,
            xTranslate: 0,
            yTranslate: 0
        });

        return this;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @returns {Matrix}
     */
    skew(x:number, y:number):Matrix {
        this.transform({
            xScale: 1,
            yScale: 1,
            xSkew: x,
            ySkew: y,
            xTranslate: 0,
            yTranslate: 0
        });

        return this;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @returns {Matrix}
     */
    translate(x:number, y:number):Matrix {
        this.transform({
            xScale: 1,
            yScale: 1,
            xSkew: 0,
            ySkew: 0,
            xTranslate: x,
            yTranslate: y
        });

        return this;
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    transformPoint(point:Point):Point {
        return new Point(
            point.x * this._xScale + point.y * this._xSkew + this._xTranslate,
            point.y * this._yScale + point.x * this._ySkew + this._yTranslate
        );
    }
}

export {Matrix};
