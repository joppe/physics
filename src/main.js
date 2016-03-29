import {Canvas} from './lib/dom/Canvas.js';
import {Size} from './lib/physics/Size.js';
import {Graph} from './lib/Graph.js';

let size = new Size(500, 500),
    canvas = new Canvas(size),
    graph = new Graph(canvas.getContext(), size);

graph
    .setXRange(-10, 10)
    .setYRange(-10, 10)
    .drawGrid(1)
    .drawAxes()
;

canvas.appendTo(document.querySelector('body'));
