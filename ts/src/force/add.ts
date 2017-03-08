import {Vector} from './../geometry/Vector';
import {zero} from './zero';

/**
 * @interface AddInterface
 */
interface AddInterface {
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
export const add:AddInterface = (...forces:Vector[]):Vector => {
    return forces.reduce((sum:Vector, force:Vector):Vector => {
        return sum.incrementBy(force);
    }, zero());
};
