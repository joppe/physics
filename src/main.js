import {Canvas} from './lib/dom/Canvas.js';
import {Size} from './lib/physics/Size.js';
import {Graph} from './lib/graph/Graph.js';

let size = new Size(500, 500),
    canvas = new Canvas(size),
    graph = new Graph(canvas.getContext(), size);

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

canvas.appendTo(document.querySelector('body'));
