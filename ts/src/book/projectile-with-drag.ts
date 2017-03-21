import {Canvas} from './../dom/Canvas';
import {Ball} from './../object/Ball';
import {Vector} from './../geometry/Vector';
import {Timer} from './../timer/Timer';
import {Animator} from './../animation/Animator';
import {constantGravity} from './../force/gravity';
import {linearDrag} from './../force/drag';
import {add} from './../force/add';
import {FPS} from './../animation/FPS';

const fps:FPS = new FPS();
const animationTime:number = 20; // duration is in seconds
const canvas:Canvas = new Canvas({width: 1000, height: 800});
const ball:Ball = new Ball(15);
const timer:Timer = new Timer();

// The drag
const k:number = 0.1;

// The gravity
const g:number = 10;

const animator:Animator = new Animator(():boolean => {
    // The duration needs to be in seconds
    const duration:number = 0.001 * timer.getElapsed();

    // The elapsed time needs to be in seconds
    const elapsed:number = 0.001 * timer.time();

    // Move and draw the ball
    ball.position = ball.position.add(ball.velocity.multiply(elapsed));
    canvas.clear();
    ball.draw(canvas.context);

    // Calculate the acceleration
    const gravity:Vector = constantGravity(ball.mass, g);
    const drag:Vector = linearDrag(k, ball.velocity);
    const force:Vector = add(gravity, drag);
    const acceleration = force.multiply(1 / ball.mass);
    ball.velocity = ball.velocity.add(acceleration.multiply(elapsed));

    // Display fps
    fps.tick();
    canvas.context.fillText(`FPS: ${fps.fps.toFixed(0)}`, 10, 10);

    return (duration < animationTime);
});

ball.position = new Vector(50, 400);
ball.velocity = new Vector(60, -60);
ball.draw(canvas.context);

canvas.appendTo(document.body);

timer.start();
animator.start();
