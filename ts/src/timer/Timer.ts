import {timestamp} from './../datetime/timestamp';

/**
 * @interface TimeEntryInterface
 */
interface TimeEntryInterface {
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
     * Start the timer.
     *
     * @returns {number}
     * @throws Error
     */
    start():number {
        if (undefined !== this._startTime) {
            throw new Error('Timer already started.');
        }

        this.reset();

        return this._startTime;
    }

    /**
     * Reset the start and stop time.
     *
     * @returns {Timer}
     */
    reset():Timer {
        return this.set(timestamp());
    }

    /**
     * Set the start time.
     *
     * @param {number} time
     * @returns {Timer}
     */
    set(time:number):Timer {
        this._startTime = time;
        this._lastTime = time;
        this._timestamps = [this._startTime];
        this._stopTime = undefined;

        return this;
    }

    /**
     * Stop the timer.
     *
     * @returns {number}
     */
    stop():number {
        this._stopTime = timestamp();
        this._timestamps.push(this._stopTime);

        return this._stopTime;
    }

    /**
     * Store the current timestamp.
     *
     * @returns {number}
     */
    time():number {
        const now:number = timestamp();
        const time:number = this.getElapsed(now, this._lastTime);

        this._lastTime = now;
        this._timestamps.push(now);

        return time;
    }

    /**
     * @todo This should return an iterator
     *
     * @returns {TimeEntryInterface[]}
     */
    getEntries():TimeEntryInterface[] {
        let lastTime:number = this._startTime;

        return this._timestamps.map((time:number) => {
            const entry:TimeEntryInterface = {
                time,
                delta: this.getElapsed(time, lastTime),
                elapsed: this.getElapsed(time, this._startTime)
            };

            lastTime = time;

            return entry;
        });
    }

    /**
     * Get the time between two timestamps.
     *
     * @param {number}  [now=timestamp()]
     * @param {number} [past=this._startTime]
     * @returns {number}
     * @throws {Error}
     */
    getElapsed(now:number = timestamp(), past:number = this._startTime):number {
        if (undefined === this._startTime) {
            throw new Error('Timer never started.');
        }

        return now - past;
    }

    /**
     * Get the duration between the start and stop time.
     *
     * @returns {number}
     * @throws {Error}
     */
    getDuration():number {
        if (undefined === this._stopTime || undefined === this._startTime) {
            throw new Error('Timer never stopped and/or started.');
        }

        return this.getElapsed(this._stopTime, this._startTime);
    }
}
