import {SizeInterface} from './../geometry/SizeInterface';
import {Matrix} from './../transform/Matrix';
import {Canvas} from './../dom/Canvas';
import {Point} from './../geometry/Point';
import {Obj} from './../helper/Obj';

/**
 * When using:
 * - a canvas of 400x400
 * - an x range of 0-400
 * - an y range of 0-400
 *
 * The point:
 * - (0,0) is drawn at 0,400
 * - (50,100) is drawn at 50,300
 * - (400,400) is drawn at 400,0
 *
 * So y is translated to 400 and the scale is -1
 */

/**
 * @interface LineStyleInterface
 */
interface LineStyleInterface {
    /**
     * @type {string}
     */
    strokeStyle?:string;

    /**
     * @type {number}
     */
    lineWidth?:number;
}

/**
 * @interface Range
 */
interface Range {
    /**
     * @type {number}
     */
    min:number;

    /**
     * @type {number}
     */
    max:number;
}

const
    DEFAULT_LINE_STYLE:LineStyleInterface = {
        strokeStyle: '#000000',
        lineWidth: 1
    };

/**
 * @class Graph
 */
class Graph {
    /**
     * @type {object}
     */
    private _size:SizeInterface;

    /**
     * @type {Matrix}
     */
    private _transform:Matrix;

    /**
     * @type {Canvas}
     */
    private _canvas:Canvas;

    /**
     * @type {object}
     */
    private _xRange:Range;

    /**
     * @type {object}
     */
    private _yRange:Range;

    /**
     * @param {object} size
     */
    constructor(size:SizeInterface) {
        this._transform = new Matrix();
        this._canvas = new Canvas(size);
        this._size = size;

        this.setXRange(0, this._size.width);
        this.setYRange(0, this._size.height);
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Graph}
     */
    setXRange(min:number, max:number):Graph {
        let yTranslate:number = this._transform.yTranslate,
            yScale:number = this._transform.yScale;

        this._transform.identity();
        this._transform.translate(min, yTranslate);
        this._transform.scale(this._size.width / (max - min), yScale);

        this._xRange = {
            min,
            max
        };

        return this;
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Graph}
     */
    setYRange(min:number, max:number):Graph {
        let xTranslate:number = this._transform.xTranslate,
            xScale:number = this._transform.xScale;

        this._transform.identity();

        // Flip the y axis by applying a scale of -1
        this._transform.scale(xScale, -1 * this._size.height / (max - min));

        // The y origin is now at the top, move the y origin downward by translating to negative max value
        this._transform.translate(xTranslate, -max);

        this._yRange = {
            min,
            max
        };

        return this;
    }

    /**
     * @param {Point} start
     * @param {Point} end
     * @param {Object} [lineStyle]
     * @returns {Graph}
     */
    drawLine(start:Point, end:Point, lineStyle:LineStyleInterface = <LineStyleInterface>{}) {
        let context = this._canvas.context,
            styling:LineStyleInterface = <LineStyleInterface>Obj.merge(lineStyle, DEFAULT_LINE_STYLE),
            p1:Point = this._transform.transformPoint(start),
            p2:Point = this._transform.transformPoint(end);

        Obj.map(styling, (value:any, property:string) => {
            context[property] = styling[property];
        });

        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.stroke();

        return this;
    }

    /**
     * @param {number} xStep
     * @param {number} yStep
     * @returns {Graph}
     */
    drawGrid(xStep:number, yStep:number):Graph {
        let style:LineStyleInterface = {
            strokeStyle: '#88abcf'
        };

        for (let x = this._xRange.min; x <= this._xRange.max; x += xStep) {
            this.drawLine(
                new Point(x, this._yRange.min),
                new Point(x, this._yRange.max),
                style
            );
        }

        for (let y = this._yRange.min; y <= this._yRange.max; y += yStep) {
            this.drawLine(
                new Point(this._xRange.min, y),
                new Point(this._xRange.max, y),
                style
            );
        }

        return this;
    }

    /**
     * @param {HTMLElement} element
     */
    render(element:HTMLElement):void {
        this._canvas.appendTo(element);
    }
}

export {Graph};