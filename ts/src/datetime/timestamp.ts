/**
 * Get the timestamp in milliseconds.
 *
 * @interface TimestampInterface
 */
interface TimestampInterface {
    /**
     * @returns number
     */
    ():number;
}

let implementation:TimestampInterface;

if (undefined !== Date.now) {
    implementation = ():number => {
        return Date.now();
    };
} else {
    implementation = ():number => {
        return (new Date()).getTime();
    };
}

export const timestamp:TimestampInterface = implementation;
