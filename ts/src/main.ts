import {Graph} from './graph/Graph';
import {Point} from './geometry/Point';

let graph:Graph = new Graph({
    width: 400,
    height: 400
});

graph
    // .setXRange(0, 200)
    .setYRange(0, 200)
    .drawGrid(50, 50)
    // .drawXAxis()
    // .drawYAxis()
    // .drawText('Hello world', new Point(100, 100))
    .drawYLabels(50)
    .drawXLabels(50)
    .drawLine(new Point(0, 0), new Point(300, 300))
;

/*/
 graph
 .setRange('x', 0, 20)
 .setRange('y', -10, 10)
 .drawGrid(1, 1)
 .drawAxes()
 .drawLabels(2, 2)
 .plot((x) => {
 return x*x + 2;
 }, 0.1)
 ;
/**/
graph.render(<HTMLElement>document.querySelector('body'));
