import {Graph} from './graph/Graph';
import {Point} from './geometry/Point';
import {Plotter} from './graph/Plotter';

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
    .plot(<Point[]>new Plotter((x:number):number => {
        return 50 + 50 * Math.sin(x / 10);
    }, 0, 200, 0.5))
;

graph.render(<HTMLElement>document.querySelector('body'));
