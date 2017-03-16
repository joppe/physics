import {Vector} from './../geometry/Vector';

/**
 * @class Particle
 */
export class Particle {
    /**
     * @type {Vector}
     * @private
     */
    private _position:Vector;

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
     * @returns {Vector}
     */
    get position():Vector {
        return this._position;
    }

    /**
     * @param {Vector} position
     */
    set position(position:Vector) {
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
     * @returns {number}
     */
    get mass():number {
        return this._mass;
    }

    /**
     * @returns {number}
     */
    get charge():number {
        return this._charge;
    }

    /**
     * @param {number} [mass=1]
     * @param {number} [charge=0]
     */
    constructor(mass:number = 1, charge:number = 0) {
        this._mass = mass;
        this._charge = charge;
        this._position = new Vector(0, 0);
        this._velocity = new Vector(0, 0);
    }
}
