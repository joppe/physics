import {Matrix} from './Matrix.js';
import {Point} from './Point.js';

const DEFAULT_OPTIONS = {
        xScale: 1,
        yScale: 1,
        xTranslation: 0,
        yTranslation: 0,
        xSkew: 0,
        ySkew: 0
    },
    X_SCALE_POS = {
        row: 0,
        col: 0
    },
    Y_SCALE_POS = {
        row: 1,
        col: 1
    },
    X_SKEW_POS = {
        row: 1,
        col: 0
    },
    Y_SKEW_POS = {
        row: 0,
        col: 1
    },
    X_TRANSLATION_POS = {
        row: 2,
        col: 0
    },
    Y_TRANSLATION_POS = {
        row: 2,
        col: 1
    };

/**
 * @class Transform
 *
 * @link http://www.senocular.com/flash/tutorials/transformmatrix/
 */
export class Transform {
    /**
     * @returns {Number}
     */
    get xScale() {
        return this.matrix.getElement(X_SCALE_POS.row, X_SCALE_POS.col);
    }

    /**
     * @param {Number} value
     */
    set xScale(value) {
        this.matrix.setElement(X_SCALE_POS.row, X_SCALE_POS.col, value);
    }

    /**
     * @returns {Number}
     */
    get yScale() {
        return this.matrix.getElement(Y_SCALE_POS.row, Y_SCALE_POS.col);
    }

    /**
     * @param {Number} value
     */
    set yScale(value) {
        this.matrix.setElement(Y_SCALE_POS.row, Y_SCALE_POS.col, value);
    }

    /**
     * @returns {Number}
     */
    get xSkew() {
        return this.matrix.getElement(X_SKEW_POS.row, X_SKEW_POS.col);
    }

    /**
     * @param {Number} value
     */
    set xSkew(value) {
        this.matrix.setElement(X_SKEW_POS.row, X_SKEW_POS.col, value);
    }

    /**
     * @returns {Number}
     */
    get ySkew() {
        return this.matrix.getElement(Y_SKEW_POS.row, Y_SKEW_POS.col);
    }

    /**
     * @param {Number} value
     */
    set ySkew(value) {
        this.matrix.setElement(Y_SKEW_POS.row, Y_SKEW_POS.col, value);
    }

    /**
     * @returns {Number}
     */
    get xTranslation() {
        return this.matrix.getElement(X_TRANSLATION_POS.row, X_TRANSLATION_POS.col);
    }

    /**
     * @param {Number} value
     */
    set xTranslation(value) {
        this.matrix.setElement(X_TRANSLATION_POS.row, X_TRANSLATION_POS.col, value);
    }

    /**
     * @returns {Number}
     */
    get yTranslation() {
        return this.matrix.getElement(Y_TRANSLATION_POS.row, Y_TRANSLATION_POS.col);
    }

    /**
     * @param {Number} value
     */
    set yTranslation(value) {
        this.matrix.setElement(Y_TRANSLATION_POS.row, Y_TRANSLATION_POS.col, value);
    }

    /**
     * @param {Object} [options]
     */
    constructor(options = {}) {
        let config = Object.assign({}, options, DEFAULT_OPTIONS);

        this.matrix = new Matrix([
            [config.xScale, config.ySkew, 0],
            [config.xSkew, config.yScale, 0],
            [config.xTranslation, config.yTranslation, 1]
        ]);
    }

    /**
     * @param {Point} point
     * @returns {Point}
     */
    transformPoint(point) {
        let x = point.x * this.xScale + point.y * this.xSkew + this.xTranslation,
            y = point.x * this.ySkew + point.y * this.yScale + this.yTranslation;

        return new Point(x, y);
    }

    /**
     * @param {Number} xTranslation
     * @param {Number} yTranslation
     * @returns {Transform}
     */
    translate(xTranslation, yTranslation) {
        this.xTranslation += xTranslation;
        this.yTranslation += yTranslation;

        return this;
    }

    /**
     * @param {Number} xScale
     * @param {Number} yScale
     * @returns {Transform}
     */
    scale(xScale, yScale) {
        this.xScale *= xScale;
        this.yScale *= yScale;
        this.xSkew *= xScale;
        this.ySkew *= yScale;
        this.xTranslation *= xScale;
        this.yTranslation *= yScale;

        return this;
    }

    /**
     * @param {Number} angle, in radians
     * @returns {Transform}
     */
    rotate(angle) {
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
     */
    identity() {
        this.matrix = new Matrix([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]);
    }
}
