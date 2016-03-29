import {Point} from './physics/Point.js';

/**
 * @class Graph
 */
export class Graph {
    /**
     *
     * @param {CanvasRenderingContext2D} context
     * @param {Size} size
     */
    constructor(context, size) {
        this.context = context;
        this.size = size;

        this.origin = new Point(0, 0);

        this.setXRange(0, size.width);
        this.setYRange(0, size.height);
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Graph}
     */
    setXRange(min, max) {
        this.xRange = {
            min,
            max
        };

        this.xScale =  this.size.width / (max - min);
        this.origin.x = -min * this.xScale;

        return this;
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {Graph}
     */
    setYRange(min, max) {
        this.xRange = {
            min,
            max
        };

        this.yScale = this.size.height / (max - min);
        this.origin.y = -min * this.yScale;

        return this;
    }

    /**
     * @param {Point} start
     * @param {Point} end
     * @param {string} strokeStyle
     * @param {string} lineWidth
     * @returns {Graph}
     */
    drawStraightLine(start, end, strokeStyle = '#000000', lineWidth = 1) {
        this.context.strokeStyle = strokeStyle;
        this.context.lineWidth = lineWidth;
        this.context.beginPath();
        this.context.moveTo(start.x, start.y);
        this.context.lineTo(end.x, end.y);
        this.context.stroke();

        return this;
    }

    /**
     * @returns {Graph}
     */
    drawXAxis() {
        let strokeStyle = '#000000',
            lineWidth = 2;

        if (0 < this.origin.x && this.size.width > this.origin.x) {
            this.drawStraightLine(
                new Point(this.origin.x, 0),
                new Point(this.origin.x, this.size.height),
                strokeStyle,
                lineWidth
            );
        } else if (this.size.width >= this.origin.x) {
            this.drawStraightLine(
                new Point(0, 0),
                new Point(0, this.size.height),
                strokeStyle,
                lineWidth
            );
        }

        return this;
    }

    /**
     * @returns {Graph}
     */
    drawYAxis() {
        let strokeStyle = '#000000',
            lineWidth = 2;

        if (0 < this.origin.y && this.size.height > this.origin.y) {
            this.drawStraightLine(
                new Point(0, this.origin.y),
                new Point(this.size.width, this.origin.y),
                strokeStyle,
                lineWidth
            );
        } else {
            this.drawStraightLine(
                new Point(0, this.size.height),
                new Point(this.size.width, this.size.height),
                strokeStyle,
                lineWidth
            );
        }

        return this;
    }

    /**
     * @returns {Graph}
     */
    drawAxes() {
        return this
            .drawXAxis()
            .drawYAxis()
        ;
     }

    /**
     * @param {number} x
     * @returns {number}
     */
    transformXPosToPixel(x) {
        let pixel = x * this.xScale;

        return pixel + this.origin.x;
    }

    /**
     * @param {number} y
     * @returns {number}
     */
    transformYPosToPixel(y) {
        let pixel = y * this.xScale;

        return pixel + this.origin.x;
    }

    drawGrid() {
        return this;
    }
}
