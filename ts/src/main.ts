import {Graph} from './graph/Graph';
import {Point} from './geometry/Point';

let graph:Graph = new Graph({
    width: 400,
    height: 400
});

graph
    .drawLine(new Point(0, 0), new Point(300, 300))
    .drawGrid(50, 100)
    .drawXAxis()
    .drawYAxis()
;

graph.render(<HTMLElement>document.querySelector('body'));
