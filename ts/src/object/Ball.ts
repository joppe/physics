import {Particle} from './Particle';

/**
 * @class Ball
 */
export class Ball extends Particle {
    /**
     * @type {string}
     * @private
     */
    private _color:string;

    /**
     * @type {number}
     * @private
     */
    private _radius:number;

    /**
     * @param {number} radius
     * @param {string} color
     * @param {number} mass
     * @param {number} charge
     */
    constructor(radius:number = 20, color:string = '#0000ff', mass:number = 1, charge:number = 0) {
        super(mass, charge);

        this._radius = radius;
        this._color = color;
    }

    /**
     * @param {CanvasRenderingContext2D} context
     */
    draw(context:CanvasRenderingContext2D):void {
        context.fillStyle = this._color;
        context.beginPath();
        context.arc(this.position.x, this.position.y, this._radius, 0, 2 * Math.PI, true);
        context.closePath();
        context.fill();
    }
}
