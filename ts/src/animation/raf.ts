/**
 * @interface RequestAnimationFrameInterface
 */
interface RequestAnimationFrameInterface {
    /**
     * @param {FrameRequestCallback} callback
     * @returns {number}
     */
    (callback:FrameRequestCallback):number;
}

/**
 * @interface CancelAnimationFrameInterface
 */
interface CancelAnimationFrameInterface {
    /**
     * @param {number} handle
     */
    (handle:number):void;
}

/**
 * Vendor prefixes
 *
 * @type {string[]}
 */
const vendors:string[] = ['webkit', 'moz'];

/**
 * @type {RequestAnimationFrameInterface}
 */
let rAF:RequestAnimationFrameInterface = window.requestAnimationFrame;

/**
 * @type {CancelAnimationFrameInterface}
 */
let cAF:CancelAnimationFrameInterface = window.cancelAnimationFrame;

if (undefined === rAF) {
    vendors.every((vendor:string) => {
        rAF = window[`${vendor}RequestAnimationFrame`] as RequestAnimationFrameInterface;
        cAF = window[`${vendor}CancelAnimationFrame`] as CancelAnimationFrameInterface;

        return undefined === rAF;
    });

    if (undefined === rAF) {
        let last:number = 0;

        rAF = (callback:FrameRequestCallback):number => {
            const now:number = (new Date()).getTime();

            // Set timeout in milliseconds to get 60 fps
            const timeToCall:number = Math.max(0, 16 - (now - last));
            const id:number = window.setTimeout(():void => {
                callback(now + timeToCall);
            }, timeToCall);

            last = now + timeToCall;

            return id;
        };

        cAF = (handle:number):void => {
            window.clearTimeout(handle);
        };
    }
}

export {rAF, cAF};
