import {Vector} from './../geometry/Vector';

/**
 * @interface ZeroFunctionInterface
 */
interface ZeroInterface {
    /**
     * @returns {Vector}
     */
    ():Vector;
}

/**
 * @returns {Vector}
 */
export const zero:ZeroInterface = ():Vector => {
    return new Vector(0, 0);
};
