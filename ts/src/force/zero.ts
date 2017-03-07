import {Vector} from './../geometry/Vector';

/**
 * @interface ZeroFunctionInterface
 */
interface ZeroFunctionInterface {
    /**
     * @returns {Vector}
     */
    ():Vector;
}

/**
 * @returns {Vector}
 */
export const zero:ZeroFunctionInterface = ():Vector => {
    return new Vector(0, 0);
};
