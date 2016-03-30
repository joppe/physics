import {Point} from './../physics/Point.js';
import {Axis} from './Axis.js';

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

        this.axes = {
            x: new Axis(size.width),
            y: new Axis(size.height, true)
        };

        this
            .setRange('x', 0, size.width)
            .setRange('y', 0, size.height)
        ;
    }

    /**
     * @param {string} axis
     * @param {number} min
     * @param {number} max
     * @returns {Graph}
     */
    setRange(axis, min, max) {
        this.axes[axis].setRange(min, max);

        return this;
    }

    /**
     * @param {Point} start
     * @param {Point} end
     * @param {Object} [options]
     * @returns {Graph}
     */
    drawLine(start, end, options = {}) {
        let styling = Object.assign({
            strokeStyle: '#000000',
            lineWidth: 1
        }, options);

        for (let property in styling) {
            if (styling.hasOwnProperty(property)) {
                this.context[property] = styling[property];
            }
        }

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
        let style = {
                strokeStyle: '#000000',
                lineWidth: 2
            },
            x = 0;

        if (this.axes.x.isCentered()) {
            x = this.axes.x.origin;
        }

        this.drawLine(
            new Point(x, 0),
            new Point(x, this.axes.y.size),
            style
        );

        return this;
    }

    /**
     * @returns {Graph}
     */
    drawYAxis() {
        let style = {
                strokeStyle: '#000000',
                lineWidth: 2
            },
            y = this.axes.y.size;

        if (this.axes.y.isCentered()) {
            y = this.axes.y.origin;
        }

        this.drawLine(
            new Point(0, y),
            new Point(this.axes.x.size, y),
            style
        );

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
     * @param {number} xStep
     * @param {number} yStep
     * @returns {Graph}
     */
    drawGrid(xStep, yStep) {
        let style = {
            strokeStyle: '#88abcf'
        };

        for (let x = this.axes.x.min; x <= this.axes.x.max; x += xStep) {
            this.drawLine(
                new Point(this.axes.x.posToPixel(x), 0),
                new Point(this.axes.x.posToPixel(x), this.axes.y.size),
                style
            );
        }

        for (let y = this.axes.y.min; y <= this.axes.y.max; y += yStep) {
            this.drawLine(
                new Point(0, this.axes.y.posToPixel(y)),
                new Point(this.axes.x.size, this.axes.y.posToPixel(y)),
                style
            );
        }

        return this;
    }

    /**
     * @param {string} text
     * @param {Point} position
     * @param {Object} options
     * @returns {Graph}
     */
    drawText(text, position, options = {}) {
        let styling = Object.assign({
            font: '10pt Arial',
            fillStyle: '#000000',
            textAlign: 'left'
        }, options);

        for (let property in styling) {
            if (styling.hasOwnProperty(property)) {
                this.context[property] = styling[property];
            }
        }

        this.context.fillText(String(text), position.x, position.y);

        return this;
    }

    /**
     * @param {number} step
     * @returns {Graph}
     */
    drawXLabels(step) {
        let style = {
                font: '10pt Arial',
                fillStyle: '#000000',
                textAlign: 'left'
            },
            yAxis = 0;

        if (this.axes.y.isCentered()) {
            yAxis = this.axes.y.origin;

            for (let x = 0; x <= this.axes.x.max; x += step) {
                this.drawText(String(x), new Point(this.axes.x.posToPixel(x) - 4, yAxis + 15), style);
            }

            for (let x = this.axes.x.min; 0 > x; x += step) {
                this.drawText(String(x), new Point(this.axes.x.posToPixel(x) - 4, yAxis + 15), style);
            }
        } else {
            for (let x = this.axes.x.min; x <= this.axes.x.max; x += step) {
                this.drawText(String(x), new Point(this.axes.x.posToPixel(x) - 4, yAxis + 15), style);
            }
        }

        return this;
    }

    /**
     * @param {number} step
     * @returns {Graph}
     */
    drawYLabels(step) {
        let style = {
                font: '10pt Arial',
                fillStyle: '#000000',
                textAlign: 'right'
            },
            xAxis = 0;

        if (this.axes.y.isCentered()) {
            xAxis = this.axes.x.origin;

            for (let y = 0; y <= this.axes.x.max; y += step) {
                this.drawText(String(y), new Point(xAxis - 15, this.axes.y.posToPixel(y)), style);
            }

            for (let y = this.axes.x.min; 0 > y; y += step) {
                this.drawText(String(y), new Point(xAxis - 15, this.axes.y.posToPixel(y)), style);
            }
        } else {
            for (let y = this.axes.x.min; y <= this.axes.x.max; y += step) {
                this.drawText(String(y), new Point(xAxis - 15, this.axes.y.posToPixel(y)), style);
            }
        }

        return this;
    }

    /**
     * @param {number} xStep
     * @param {number} yStep
     * @returns {Graph}
     */
    drawLabels(xStep, yStep) {
        this
            .drawXLabels(xStep)
            .drawYLabels(yStep)
        ;

        return this;
    }

    /**
     * @param {Function} func
     * @returns {Graph}
     */
    plot(func) {
        let previous = null;

        for (let x = this.axes.x.min; x <= this.axes.x.max; x += 1) {
            let y = func(x),
                point = new Point(this.axes.x.posToPixel(x), this.axes.y.posToPixel(y));

            if (null !== previous) {
                this.drawLine(previous, point, {
                    strokeStyle: '#ff0000'
                });
            }

            previous = point;
        }

        return this;
    }
}
