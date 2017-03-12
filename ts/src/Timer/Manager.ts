import {Timer} from './Timer';

/**
 * @interface TimersRegistryInterface
 */
interface TimersRegistryInterface {
    /**
     * @type {Timer}
     */
    [id:string]:Timer;
}

/**
 * @interface ManagerInterface
 */
export interface ManagerInterface {
    /**
     * @param {string} id
     * @returns {Timer}
     */
    get(id:string):Timer;

    /**
     * @param {string} id
     * @returns {Timer}
     */
    start(id:string):Timer;

    /**
     * @param {string} id
     * @returns {Timer}
     */
    end(id:string):Timer;

    /**
     * @param {string} id
     * @returns {Timer}
     */
    time(id:string):Timer;

    /**
     * @param {string} id
     * @returns {number}
     */
    duration(id:string):number;
}

/**
 * @type {TimersRegistryInterface}
 */
const timers:TimersRegistryInterface = {};

/**
 * @type {ManagerInterface}
 */
export const Manager:ManagerInterface  = {
    /**
     * @param {string} id
     * @returns {Timer}
     */
    get(id:string):Timer {
        if (undefined === timers[id]) {
            timers[id] = new Timer();
        }

        return timers[id];
    },

    /**
     * @param {string} id
     * @returns {Timer}
     */
    start(id:string):Timer {
        let timer:Timer = Manager.get(id);

        timer.start();

        return timer;
    },

    /**
     * @param {string} id
     * @returns {Timer}
     */
    end(id:string):Timer {
        let timer = Manager.get(id);

        timer.stop();

        return timer;
    },

    /**
     * @param {string} id
     * @returns {Timer}
     */
    time(id:string):Timer {
        let timer = Manager.get(id);

        timer.time();

        return timer;
    },

    /**
     * @param {string} id
     * @returns {number}
     */
    duration(id:string):number {
        return Manager.get(id).getDuration();
    },

    /**
     * This should return an iterator
     *
     * @returns {TimersRegistryInterface}
     */
    getTimers():TimersRegistryInterface {
        return timers;
    }
};