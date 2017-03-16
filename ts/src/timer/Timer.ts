import {timestamp} from './../datetime/timestamp';

/**
 * @interface EntryInterface
 */
interface EntryInterface {
    /**
     * @type {number}
     */
    time:number,

    /**
     * @type {number}
     */
    delta:number,

    /**
     * @type {number}
     */
    elapsed:number;
}

/**
 * @class Timer
 */
export class Timer {
    /**
     * @type {number}
     * @private
     */
    private _startTime:number;

    /**
     * @type {number}
     * @private
     */
    private _stopTime:number;

    /**
     * @type {number}
     * @private
     */
    private _lastTime:number;

    /**
     * @type {number[]}
     * @private
     */
    private _timestamps:number[] = [];

    /**
     * Start the times
     *
     * @throws Error
     */
    start():void {
        if (undefined !== this._startTime) {
            throw new Error('Timer already started.');
        }

        this.reset();
    }

    /**
     * Reset the start time
     */
    reset():void {
        this.set(timestamp());
        this._stopTime = undefined;
    }

    /**
     * @param {number} time
     */
    set(time:number):void {
        this._startTime = time;
        this._lastTime = time;
        this._timestamps = [this._startTime];
    }

    /**
     * Stop the timer
     */
    stop():void {
        this._stopTime = timestamp();
        this._timestamps.push(this._stopTime);
    }

    /**
     * Store the timestamp
     *
     * @returns {number}
     */
    time():number {
        const now:number = timestamp();
        const time:number = now - this._lastTime;

        this._lastTime = now;
        this._timestamps.push(now);

        return time;
    }

    /**
     * This should return an iterator
     *
     * @returns {EntryInterface[]}
     */
    getEntries():EntryInterface[] {
        let lastTime:number = this._startTime;

        return this._timestamps.map((time:number) => {
            const entry:EntryInterface = {
                time,
                delta: time - lastTime,
                elapsed: time - this._startTime
            };

            lastTime = time;

            return entry;
        });
    }

    /**
     * @returns {number}
     * @throws {Error}
     */
    getElapsed(now:number = timestamp()):number {
        if (undefined === this._startTime) {
            throw new Error('Timer never started');
        }

        return now - this._startTime;
    }

    /**
     * @returns {number}
     * @throws {Error}
     */
    getDuration():number {
        if (undefined === this._stopTime || undefined === this._startTime) {
            throw new Error('Timer never stopped and/or started');
        }

        return this._stopTime - this._startTime;
    }
}
