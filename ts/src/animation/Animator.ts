import {rAF, cAF} from './raf';

/**
 * @interface AnimatableInterface
 */
export interface AnimatableInterface {
    /**
     * @param {number} time
     * @returns {boolean}
     */
    (time?:number):boolean;
}

/**
 * @class Animator
 */
export class Animator {
    /**
     * The id given by window.requestAnimationFrame
     *
     * @type {number}
     * @private
     */
    private _animationId:number;

    /**
     * The function that wraps the animation function
     *
     * @type {FrameRequestCallback}
     * @private
     */
    private _wrapper:FrameRequestCallback;

    /**
     * @param {AnimatableInterface} func
     */
    constructor(func:AnimatableInterface) {
        this._wrapper = (time:number):void => {
            if (func(time)) {
                this._animationId = rAF(this._wrapper);
            }
        };
    }

    /**
     * Start the animator
     */
    start():void {
        this._animationId = rAF(this._wrapper);
    }

    /**
     * Stop the animator
     */
    stop():void {
        cAF(this._animationId);
    }
}
