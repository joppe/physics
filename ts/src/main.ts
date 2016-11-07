import {Graph} from './graph/Graph';
import {Plotter} from './graph/Plotter';
import {Point} from './geometry/Point';

let graph:Graph = new Graph({
    width: 400,
    height: 400
});

graph
    .setXRange(-200, 200)
    .setYRange(0, 200)
    .drawGrid(50, 50)
    .drawXAxis()
    .drawYAxis()
    .drawYLabels(50)
    .drawXLabels(50)
    .plot(new Plotter((x:number):number => {
        return 50 + 50 * Math.sin(x / 10);
    }, 0, 200, 0.5))
    .plot([
        new Point(100, 150),
        new Point(200, 150),
    ])
;

graph.render(<HTMLElement>document.querySelector('body'));
