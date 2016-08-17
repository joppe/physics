/**
 * @class Canvas
 */
export class Canvas {
    /**
     * @param {Size} size
     */
    constructor(size) {
        this.size = size;

        this.el = document.createElement('canvas');
        this.el.setAttribute('width', this.size.width);
        this.el.setAttribute('height', this.size.height);
    }

    /**
     * @returns {CanvasRenderingContext2D}
     */
    getContext() {
        return this.el.getContext('2d');
    }

    /**
     * @returns {number}
     */
    getWidth() {
        return this.size.width;
    }

    /**
     * @returns {number}
     */
    getHeight() {
        return this.size.height;
    }

    /**
     * @param {HTMLElement} target
     * @returns {Canvas}
     */
    appendTo(target) {
        target.appendChild(this.el);

        return this;
    }
}
