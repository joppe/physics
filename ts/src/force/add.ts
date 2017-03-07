import {Vector} from './../geometry/Vector';
import {zero} from './zero';

/**
 * @interface AddFunctionInterface
 */
interface AddFunctionInterface {
    /**
     * @param {Vector[]} forces
     * @returns {Vector}
     */
    (...forces:Vector[]):Vector
}

/**
 * @param {Vector[]} forces
 * @returns {Vector}
 */
export const add:AddFunctionInterface = (...forces:Vector[]):Vector => {
    return forces.reduce((sum:Vector, force:Vector):Vector => {
        return sum.incrementBy(force);
    }, zero());
};
