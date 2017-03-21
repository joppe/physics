import {Timer} from './Timer';

/**
 * @interface TimerRegistryInterface
 */
interface TimerRegistryInterface {
    /**
     * @type {Timer}
     */
    [id:string]:Timer;
}

/**
 * @interface TimerManagerInterface
 */
export interface TimerManagerInterface {
    /**
     * Get a timer by it's id.
     *
     * @param {string} id
     * @returns {Timer}
     */
    get(id:string):Timer;

    /**
     * Start a timer.
     *
     * @param {string} id
     * @returns {number}
     */
    start(id:string):number;

    /**
     * Stop a timer.
     *
     * @param {string} id
     * @returns {number}
     */
    stop(id:string):number;

    /**
     * Add timestamp to timer.
     *
     * @param {string} id
     * @returns {number}
     */
    time(id:string):number;
}

/**
 * @type {TimerRegistryInterface}
 */
const timers:TimerRegistryInterface = {};

/**
 * @type {TimerManagerInterface}
 */
export const TimerManager:TimerManagerInterface = {
    /**
     * @inheritDoc
     */
    get(id:string):Timer {
        if (undefined === timers[id]) {
            timers[id] = new Timer();
        }

        return timers[id];
    },

    /**
     * @inheritDoc
     */
    start(id:string):number {
        let timer:Timer = TimerManager.get(id);

        return timer.start();
    },

    /**
     * @inheritDoc
     */
    stop(id:string):number {
        let timer = TimerManager.get(id);

        return timer.stop();
    },

    /**
     * @param {string} id
     * @returns {number}
     */
    time(id:string):number {
        let timer = TimerManager.get(id);

        return timer.time();
    },

    /**
     * @todo This should return an iterator
     *
     * @returns {TimerRegistryInterface}
     */
    getTimers():TimerRegistryInterface {
        return timers;
    }
};