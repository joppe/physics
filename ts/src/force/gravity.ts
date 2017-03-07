import {Vector} from './../geometry/Vector';

/**
 * @interface ConstantGravityFunctionInterface
 */
interface ConstantGravityFunctionInterface {
    /**
     * @param {number} mass
     * @param {number} magnitude
     * @returns {Vector}
     */
    (mass:number, magnitude:number):Vector;
}

/**
 * @param {number} mass
 * @param {number} magnitude
 * @returns {Vector}
 */
export const constantGravity:ConstantGravityFunctionInterface = (mass:number, magnitude:number):Vector => {
    return new Vector(0, mass * magnitude);
};
