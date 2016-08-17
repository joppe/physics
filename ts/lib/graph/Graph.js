import {Point} from './../geometry/Point.js';
import {Axis} from './Axis.js';
import {range} from './../helper/range.js';

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
            x = this.axes.x.min;

        if (this.axes.x.isCentered()) {
            x = 0;
        }

        this.drawLine(
            this.posToPixel(x, this.axes.y.min),
            this.posToPixel(x, this.axes.y.max),
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
            y = this.axes.y.min;

        if (this.axes.y.isCentered()) {
            y = 0;
        }

        this.drawLine(
            this.posToPixel(this.axes.x.min, y),
            this.posToPixel(this.axes.x.max, y),
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
                this.posToPixel(x, this.axes.y.min),
                this.posToPixel(x, this.axes.y.max),
                style
            );
        }

        for (let y = this.axes.y.min; y <= this.axes.y.max; y += yStep) {
            this.drawLine(
                this.posToPixel(this.axes.x.min, y),
                this.posToPixel(this.axes.x.max, y),
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
            y = this.axes.y.min,
            xx,
            offset = new Point(-4, 15);

        if (this.axes.x.isCentered()) {
            y = 0;
            xx = range(0, this.axes.x.max, step);
            xx = xx.concat(range(0, this.axes.x.min, step));
        } else {
            xx = range(this.axes.x.min, this.axes.x.max, step);
        }

        for (let x of xx) {
            let position = this.posToPixel(x, y);

            this.drawText(String(x), position.add(offset), style);
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
            x = this.axes.x.min,
            yy,
            offset = new Point(-15, 0);

        if (this.axes.y.isCentered()) {
            x = 0;
            yy = range(0, this.axes.y.max, step);
            yy = yy.concat(range(0, this.axes.y.min, step));
        } else {
            yy = range(this.axes.y.min, this.axes.y.max, step);
        }

        for (let y of yy) {
            let position = this.posToPixel(x, y);

            this.drawText(String(y), position.add(offset), style);
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
     * @param {number} [step]
     * @param {string} [color]
     * @returns {Graph}
     */
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

    /**
     * @param {number} x
     * @param {number} y
     * @returns {Point}
     */
    posToPixel(x, y) {
        return new Point(this.axes.x.posToPixel(x), this.axes.y.posToPixel(y));
    }
}
