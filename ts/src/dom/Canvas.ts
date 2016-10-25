import {SizeInterface} from '../geometry/SizeInterface';

/**
 * @class Canvas
 */
class Canvas {
    /**
     * @type {object}
     */
    private _size:SizeInterface;

    /**
     * @type {HTMLCanvasElement}
     */
    private _el:HTMLCanvasElement;

    /**
     * @returns {CanvasRenderingContext2D}
     */
    get context():CanvasRenderingContext2D {
        return this._el.getContext('2d');
    }

    /**
     * @returns {number}
     */
    get width():number {
        return this._size.width;
    }

    /**
     * @returns {number}
     */
    get height():number {
        return this._size.height;
    }

    /**
     * @param {object} size
     */
    constructor(size:SizeInterface) {
        this._size = size;

        this._el = document.createElement('canvas');
        this._el.setAttribute('width', this._size.width);
        this._el.setAttribute('height', this._size.height);
    }

    /**
     * @param {HTMLElement} target
     * @returns {Canvas}
     */
    appendTo(target:HTMLElement):Canvas {
        target.appendChild(this._el);

        return this;
    }
}

export {Canvas};
