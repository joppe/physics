import {SizeInterface} from './../geometry/SizeInterface';
import {Matrix} from './../transform/Matrix';
import {Canvas} from './../dom/Canvas';
import {Point} from './../geometry/Point';
import {Obj} from './../helper/Obj';
import {Range} from './../range/Range';

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
 * TODO:
 * - accept line style for drawing grid/axis
 * - default line style for grid/axis
 */

/**
 * @interface TextStyleInterface
 */
interface TextStyleInterface {
    /**
     * @type {string}
     */
    font?:string,

    /**
     * @type {string}
     */
    fillStyle?:string;

    /**
     * @type {string}
     */
    textAlign?:string;
}

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
 * @interface RangeInterface
 */
interface RangeInterface {
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
    OFFSET:number = 30,
    DEFAULT_TEXT_STYLE:TextStyleInterface = {
        font: '10pt Arial',
        fillStyle: '#000000',
        textAlign: 'left'
    },
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
    private _xRange:RangeInterface = {
        min: 0,
        max: 0
    };

    /**
     * @type {object}
     */
    private _yRange:RangeInterface = {
        min: 0,
        max: 0
    };

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
        this._xRange = {
            min,
            max
        };
        this.updateTransform();

        return this;
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Graph}
     */
    setYRange(min:number, max:number):Graph {
        this._yRange = {
            min,
            max
        };
        this.updateTransform();

        return this;
    }

    /**
     * Set the range
     */
    private updateTransform():void {
        this._transform.identity();
        
        // Flip the y-axis
        this._transform.scale(1, -1);

        // Set the origin to the bottom
        this._transform.translate(0, -this._size.height);

        // Apply the offset
        this._transform.translate(OFFSET, OFFSET);

        // Apply the scale
        this._transform.scale(
            (this._size.width - 2 * OFFSET) / (this._xRange.max - this._xRange.min),
            (this._size.height - 2 * OFFSET) / (this._yRange.max - this._yRange.min)
        );

        // Set the bottom left corner equal to the minimum values of axises
        this._transform.translate(-this._xRange.min, -this._yRange.min);
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
     * @param {string} text
     * @param {Point} position
     * @param {object} [textStyle]
     * @returns {Graph}
     */
    drawText(text:string, position:Point, textStyle:TextStyleInterface = <TextStyleInterface>{}) {
        let context = this._canvas.context,
            styling:TextStyleInterface = <TextStyleInterface>Obj.merge(textStyle, DEFAULT_TEXT_STYLE);

        Obj.map(styling, (value:any, property:string) => {
            context[property] = styling[property];
        });

        context.fillText(text, position.x, position.y);

        return this;
    }

    /**
     * @param {number} xStep
     * @param {number} yStep
     * @param {object} [lineStyle]
     * @returns {Graph}
     */
    drawGrid(xStep:number, yStep:number, lineStyle:LineStyleInterface = <LineStyleInterface>{}):Graph {
        let styling:LineStyleInterface = <LineStyleInterface>Obj.merge({
                strokeStyle: '#88abcf'
            }, lineStyle, DEFAULT_LINE_STYLE);

        for (let x = this._xRange.min; x <= this._xRange.max; x += xStep) {
            this.drawLine(
                new Point(x, this._yRange.min),
                new Point(x, this._yRange.max),
                styling
            );
        }

        for (let y = this._yRange.min; y <= this._yRange.max; y += yStep) {
            this.drawLine(
                new Point(this._xRange.min, y),
                new Point(this._xRange.max, y),
                styling
            );
        }

        return this;
    }

    /**
     * @param {object} [lineStyle]
     * @returns {Graph}
     */
    drawAxes(lineStyle:LineStyleInterface = <LineStyleInterface>{}):Graph {
        return this
            .drawXAxis(lineStyle)
            .drawYAxis(lineStyle)
        ;
    }

    /**
     * @param {object} [lineStyle]
     * @returns {Graph}
     */
    drawXAxis(lineStyle:LineStyleInterface = <LineStyleInterface>{}):Graph {
        let styling:LineStyleInterface = <LineStyleInterface>Obj.merge({
                strokeStyle: '#FF0000',
                lineWidth: 2
            }, lineStyle, DEFAULT_LINE_STYLE),
            y:number = 0;

        if (this._yRange.min > 0 || this._yRange.max < 0) {
            y = this._yRange.min;
        }

        this.drawLine(
            new Point(this._xRange.min, y),
            new Point(this._xRange.max, y),
            styling
        );

        return this;
    }

    /**
     * @param {object} [lineStyle]
     * @returns {Graph}
     */
    drawYAxis(lineStyle:LineStyleInterface = <LineStyleInterface>{}):Graph {
        let styling:LineStyleInterface = <LineStyleInterface>Obj.merge({
                strokeStyle: '#FF0000',
                lineWidth: 2
            }, lineStyle, DEFAULT_LINE_STYLE),
            x:number = 0;

        if (this._xRange.min > 0 || this._xRange.max < 0) {
            x = this._xRange.min;
        }

        this.drawLine(
            new Point(x, this._yRange.min),
            new Point(x, this._yRange.max),
            styling
        );

        return this;
    }

    /**
     * @param {number} xStep
     * @param {number} yStep
     * @param {object} [textStyle]
     * @returns {Graph}
     */
    drawLabels(xStep, yStep, textStyle:TextStyleInterface = <TextStyleInterface>{}):Graph {
        this
            .drawXLabels(xStep, textStyle)
            .drawYLabels(yStep, textStyle)
        ;

        return this;
    }

    /**
     * @param {number} step
     * @param {object} [textStyle]
     * @returns {Graph}
     */
    drawYLabels(step:number, textStyle:TextStyleInterface = <TextStyleInterface>{}):Graph {
        let styling:TextStyleInterface = <TextStyleInterface>Obj.merge(textStyle, DEFAULT_TEXT_STYLE),
            x:number = 0,
            range:Range = new Range(this._yRange.min, this._yRange.max, step, true);

        if (this._xRange.min > 0 || this._xRange.max < 0) {
            x = this._xRange.min;
        }

        for (let y of range) {
            let position:Point = this._transform.transformPoint(new Point(x, y));

            position.move(-30, 5);

            this.drawText(String(y), position, styling);
        }

        return this;
    }

    /**
     * @param {number} step
     * @param {object} [textStyle]
     * @returns {Graph}
     */
    drawXLabels(step:number, textStyle:TextStyleInterface = <TextStyleInterface>{}):Graph {
        let styling:TextStyleInterface = <TextStyleInterface>Obj.merge(textStyle, DEFAULT_TEXT_STYLE),
            y:number = 0,
            range:Range = new Range(this._xRange.min, this._xRange.max, step, true);

        if (this._yRange.min > 0 || this._yRange.max < 0) {
            y = this._yRange.min;
        }

        for (let x of range) {
            let position:Point = this._transform.transformPoint(new Point(x, y));

            position.move(-5, 15);

            this.drawText(String(x), position, styling);
        }

        return this;
    }

    /**
     * @param {HTMLElement} element
     */
    render(element:HTMLElement):void {
        this._canvas.appendTo(element);
    }

    /**
     * Check if a given point can be rendered on the Graph
     * 
     * @returns {boolean}
     */
    isValidPoint(point:Point):boolean {
        return (
            point.x >= this._xRange.min && point.x <= this._xRange.max &&
            point.y >= this._yRange.min && point.y <= this._yRange.max
        );
    }

    /**
     * @param {Function} func
     * @param {number} [step]
     * @param {string} [color]
     * @returns {Graph}
     *
    plot(func, step = 1, color = '#ff0000') {
        let previous = null;

        for (let x = this.axes.x.min; x <= this.axes.x.max; x += step) {
            let y = func(x),
                point = this.posToPixel(x, y);

            if (null !== previous) {
                this.drawLine(previous, point, {
                    strokeStyle: color
                });
            }

            previous = point;
        }

        return this;
    }
    /**/
}

export {Graph};
