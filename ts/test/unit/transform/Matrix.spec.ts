import {Matrix} from 'ts/src/transform/Matrix';
import {Point} from 'ts/src/geometry/Point';

describe('Matrix.transformPoint', () => {
    it('Initially return the same point', () => {
        let matrix = new Matrix(),
            point = new Point(2, 0),
            transformedPoint:Point;

        transformedPoint = matrix.transformPoint(point);

        expect(transformedPoint.x).toBe(point.x);
        expect(transformedPoint.y).toBe(point.y);
    });

    it('Handle scale', () => {
        let matrix = new Matrix(),
            point = new Point(2, 3),
            transformedPoint:Point;

        matrix.scale(3, 6);
        transformedPoint = matrix.transformPoint(point);

        expect(transformedPoint.x).toBe(6);
        expect(transformedPoint.y).toBe(18);
    });

    it('Handle translation', () => {
        let matrix = new Matrix(),
            point = new Point(2, 0),
            transformedPoint:Point;

        matrix.translate(3, -1);
        transformedPoint = matrix.transformPoint(point);

        expect(transformedPoint.x).toBe(5);
        expect(transformedPoint.y).toBe(-1);
    });

    it('Handle scale and translation', () => {
        let matrix = new Matrix(),
            point = new Point(2, 1),
            transformedPoint:Point;

        matrix.scale(2, 0.5);
        matrix.translate(6, 3);
        transformedPoint = matrix.transformPoint(point);

        // The x after scale is 4, translate is 6 and with scale applied to it is 12
        expect(transformedPoint.x).toBe(16);
        expect(transformedPoint.y).toBe(2);
    });

    it('Handle rescale', () => {
        let matrix = new Matrix(),
            point = new Point(2, 1),
            transformedPoint:Point;

        matrix.scale(2, 0.5);
        matrix.scale(2, 2);
        transformedPoint = matrix.transformPoint(point);

        expect(transformedPoint.x).toBe(8);
        expect(transformedPoint.y).toBe(1);
    });

    it('Handle retranslate', () => {
        let matrix = new Matrix(),
            point = new Point(2, 1),
            transformedPoint:Point;

        matrix.translate(10, 10);
        matrix.translate(15, 2);
        transformedPoint = matrix.transformPoint(point);

        expect(transformedPoint.x).toBe(27);
        expect(transformedPoint.y).toBe(13);
    });

    it('Handle rotate', () => {
        let matrix = new Matrix(),
            point = new Point(1, 1),
            transformedPoint:Point;

        matrix.rotate(Math.PI);
        transformedPoint = matrix.transformPoint(point);

        expect(transformedPoint.x.toFixed(2)).toBe('-1.00');
        expect(transformedPoint.y.toFixed(2)).toBe('-1.00');
    });

    it('Handle rotate and scale', () => {
        let matrix = new Matrix(),
            point = new Point(1, 1),
            transformedPoint:Point;

        matrix.rotate(Math.PI); // -1, -1
        matrix.scale(10, 1);    // -10, -1
        matrix.rotate(Math.PI); // 10, 1
        matrix.translate(3, 9); // 40, 10
        matrix.rotate(Math.PI); // 20, 8
        transformedPoint = matrix.transformPoint(point);

        expect(transformedPoint.x.toFixed(2)).toBe('20.00');
        expect(transformedPoint.y.toFixed(2)).toBe('8.00');
    });

    it('graph', () => {
        let matrix = new Matrix(),
            p1 = new Point(0, 0),
            p2 = new Point(50, 100),
            p3 = new Point(400, 400),
            pp1:Point,
            pp2:Point,
            pp3:Point;

        matrix.translate(30, 30);
        matrix.scale(1, -1);
        matrix.translate(0, -400);

        pp1 = matrix.transformPoint(p1);
        expect(pp1.x).toBe(30);
        expect(pp1.y).toBe(430);

        pp2 = matrix.transformPoint(p2);
        expect(pp2.x).toBe(80);
        expect(pp2.y).toBe(330);

        pp3 = matrix.transformPoint(p3);
        expect(pp3.x).toBe(430);
        expect(pp3.y).toBe(30);
    });
});
