import {Point} from './../geometry/Point';
import {Vector} from './../geometry/Vector';

/**
 * @class Particle
 */
export class Particle {
    /**
     * @type {Point}
     * @private
     */
    private _position:Point;

    /**
     * @type {Vector}
     * @private
     */
    private _velocity:Vector;

    /**
     * @type {number}
     * @private
     */
    private _charge:number;

    /**
     * @type {number}
     * @private
     */
    private _mass:number;

    /**
     * @returns {Point}
     */
    get position():Point {
        return this._position;
    }

    /**
     * @param {Point} position
     */
    set position(position:Point) {
        this._position = position;
    }

    /**
     * @returns {Vector}
     */
    get velocity():Vector {
        return this._velocity;
    }

    /**
     * @param {Vector} velocity
     */
    set velocity(velocity:Vector) {
        this._velocity = velocity;
    }

    /**
     * @param {number} [mass=1]
     * @param {number} [charge=0]
     */
    constructor(mass:number = 1, charge:number = 0) {
        this._mass = mass;
        this._charge = charge;
        this._position = new Point(0, 0);
        this._velocity = new Vector(0, 0);
    }
}
