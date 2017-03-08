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
    private _startTime:number = 0;

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
     * A new frame is rendered, calculate the fps
     */
    tick():void {
        const now:number = (new Date()).getTime();

        // Get the duration in seconds
        const duration:number = (now - this._startTime) / 1000;

        this._frameCount += 1;
        this._fps = this._frameCount / duration;

        // If the duration is larger then one second, reset the duration and frame count.
        // This way the fps is calculated over a period of one second.
        if (1 < duration) {
            this._startTime = now;
            this._frameCount = 0;
        }
    }
}