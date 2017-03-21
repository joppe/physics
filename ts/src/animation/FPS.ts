import {Timer} from './../timer/Timer';

/**
 * @class FPS
 */
export class FPS {
    /**
     * @type {number}
     * @private
     */
    private _frameCount:number = 0;

    /**
     * @type {number}
     * @private
     */
    private _timer:Timer;

    /**
     * @type {number}
     * @private
     */
    private _fps:number = 0;

    /**
     * @returns {number}
     */
    get fps():number {
        return this._fps;
    }

    /**
     * Create an instance of Timer
     */
    constructor() {
        this._timer = new Timer();
        this._timer.start();
    }

    /**
     * A new frame is rendered, calculate the fps
     */
    tick():void {
        // Get the duration in seconds
        const duration:number = this._timer.getElapsed() / 1000;

        this._frameCount += 1;
        this._fps = this._frameCount / duration;

        // If the duration is larger then one second, reset the duration and frame count.
        // This way the fps is calculated over a period of one second.
        if (1 < duration) {
            this._timer.reset();
            this._frameCount = 0;
        }
    }
}