import {Vector} from './../geometry/Vector';

/**
 * @interface ConstantGravityInterface
 */
interface ConstantGravityInterface {
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
export const constantGravity:ConstantGravityInterface = (mass:number, magnitude:number):Vector => {
    return new Vector(0, mass * magnitude);
};
