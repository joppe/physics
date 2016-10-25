import {Matrix, MatrixIndexInterface} from 'Matrix';
import {Point} from '../geometry/Point';

/**
 * @interface TransformOptions
 */
interface TransformOptions {
    /**
     * @type {number}
     */
    xScale?:number;

    /**
     * @type {number}
     */
    yScale?:number;

    /**
     * @type {number}
     */
    xTranslation?:number;

    /**
     * @type {number}
     */
    yTranslation?:number;

    /**
     * @type {number}
     */
    xSkew?:number;

    /**
     * @type {number}
     */
    ySkew?:number;
}

const DEFAULT_OPTIONS = <TransformOptions>{
        xScale: 1,
        yScale: 1,
        xTranslation: 0,
        yTranslation: 0,
        xSkew: 0,
        ySkew: 0
    },
    X_SCALE_INDEX = <MatrixIndexInterface>{
        row: 0,
        column: 0
    },
    Y_SCALE_INDEX = <MatrixIndexInterface>{
        row: 1,
        column: 1
    },
    X_SKEW_INDEX = <MatrixIndexInterface>{
        row: 1,
        column: 0
    },
    Y_SKEW_INDEX = <MatrixIndexInterface>{
        row: 0,
        column: 1
    },
    X_TRANSLATION_INDEX = <MatrixIndexInterface>{
        row: 2,
        column: 0
    },
    Y_TRANSLATION_INDEX = <MatrixIndexInterface>{
        row: 2,
        column: 1
    };

/**
 * @class Transform
 *
 * @link http://www.senocular.com/flash/tutorials/transformmatrix/
 */
class Transform {
    /**
     * @type {Matrix}
     */
    private _matrix:Matrix;

    /**
     * @returns {number}
     */
    get xScale():number {
        return this._matrix.get(X_SCALE_INDEX);
    }

    /**
     * @param {number} value
     */
    set xScale(value:number) {
        this._matrix.set(X_SCALE_INDEX, value);
    }

    /**
     * @returns {number}
     */
    get yScale():number {
        return this._matrix.get(Y_SCALE_INDEX);
    }

    /**
     * @param {number} value
     */
    set yScale(value:number) {
        this._matrix.set(Y_SCALE_INDEX, value);
    }

    /**
     * @returns {number}
     */
    get xSkew():number {
        return this._matrix.get(X_SKEW_INDEX);
    }

    /**
     * @param {number} value
     */
    set xSkew(value:number) {
        this._matrix.set(X_SKEW_INDEX, value);
    }

    /**
     * @returns {number}
     */
    get ySkew():number {
        return this._matrix.get(Y_SKEW_INDEX);
    }

    /**
     * @param {number} value
     */
    set ySkew(value:number) {
        this._matrix.set(Y_SKEW_INDEX, value);
    }

    /**
     * @returns {number}
     */
    get xTranslation():number {
        return this._matrix.get(X_TRANSLATION_INDEX);
    }

    /**
     * @param {number} value
     */
    set xTranslation(value:number) {
        this._matrix.set(X_TRANSLATION_INDEX, value);
    }

    /**
     * @returns {number}
     */
    get yTranslation():number {
        return this._matrix.get(Y_TRANSLATION_INDEX);
    }

    /**
     * @param {number} value
     */
    set yTranslation(value:number) {
        this._matrix.set(Y_TRANSLATION_INDEX, value);
    }

    /**
     * @param {object} [options]
     */
    constructor(options:TransformOptions = {}) {
        let config:TransformOptions = Object.assign({}, options, DEFAULT_OPTIONS);

        this._matrix = new Matrix([
            [config.xScale, config.ySkew, 0],
            [config.xSkew, config.yScale, 0],
            [config.xTranslation, config.yTranslation, 1]
        ]);
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    transformPoint(point:Point):Point {
        let x = point.x * this.xScale + point.y * this.xSkew + this.xTranslation,
            y = point.x * this.ySkew + point.y * this.yScale + this.yTranslation;

        return new Point(x, y);
    }

    /**
     * @param {number} xTranslation
     * @param {number} yTranslation
     * @returns {Transform}
     */
    translate(xTranslation:number, yTranslation:number):Transform {
        this.xTranslation += xTranslation;
        this.yTranslation += yTranslation;

        return this;
    }

    /**
     * @param {number} xScale
     * @param {number} yScale
     * @returns {Transform}
     */
    scale(xScale:number, yScale:number):Transform {
        this.xScale *= xScale;
        this.yScale *= yScale;
        this.xSkew *= xScale;
        this.ySkew *= yScale;
        this.xTranslation *= xScale;
        this.yTranslation *= yScale;

        return this;
    }

    /**
     * @param {number} angle, in radians
     * @returns {Transform}
     */
    rotate(angle:number):Transform {
        let sin = Math.sin(angle),
            cos = Math.cos(angle),
            xScale = this.xScale,
            ySkew = this.ySkew,
            xSkew = this.xSkew,
            yScale = this.yScale,
            xTranslation = this.xTranslation,
            yTranslation = this.yTranslation;

        this.xScale = xScale * cos - ySkew * sin;
        this.ySkew = xScale * sin + ySkew * cos;
        this.xSkew = xSkew * cos - yScale * sin;
        this.yScale = xSkew * sin + yScale * cos;
        this.xTranslation = xTranslation * cos - yTranslation * sin;
        this.yTranslation = xTranslation * sin + yTranslation * cos;

        return this;
    }

    /**
     * Set the matrix to the identity matrix
     *
     * @returns {Transform}
     */
    identity():Transform {
        this._matrix = new Matrix([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]);

        return this;
    }
}

export {Transform};
