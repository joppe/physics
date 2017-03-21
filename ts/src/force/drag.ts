import {Vector} from './../geometry/Vector';
import {zero} from './zero';

/**
 * @interface LinearDragInterface
 */
interface LinearDragInterface {
    /**
     * @param {number} k
     * @param {Vector} velocity
     * @returns {Vector}
     */
    (k:number, velocity:Vector):Vector;
}

/**
 * @param {number} k
 * @param {Vector} velocity
 * @returns {Vector}
 */
export const linearDrag:LinearDragInterface = (k:number, velocity:Vector):Vector => {
    if (0 === velocity.length) {
        return zero();
    }

    return velocity.multiply(-k);
};