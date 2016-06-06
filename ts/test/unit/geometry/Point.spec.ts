/// <reference path="../../../../typings/globals/jasmine/index.d.ts" />

import {Point} from 'src/geometry/Point';

describe('Point.constructor', () => {
    it('Accept an x and y argument', () => {
        let p = new Point(0, 0);

        expect(p instanceof Point).toBe(true);
    });
});

describe('Point.getX', () => {
    it('Return the x value', () => {
        let p = new Point(10, 45);

        expect(p.getX()).toBe(10);
    });
});

describe('Point.getY', () => {
    it('Return the y value', () => {
        let p = new Point(10, 45);

        expect(p.getY()).toBe(45);
    });
});

describe('Point.add', () => {
    it('Add one point to another and return a new Point', () => {
        let a = new Point(10, 45),
            b = new Point(12, 3),
            c = a.add(b);

        expect(c.getX()).toBe(22);
        expect(c.getY()).toBe(48);
        expect(c === a).toBe(false);
        expect(c === b).toBe(false);
    });
});

describe('Point.move', () => {
    it('Move a point and return it self', () => {
        let a = new Point(10, 45),
            b = new Point(12, 3),
            c = a.move(b);

        expect(a.getX()).toBe(22);
        expect(a.getY()).toBe(48);
        expect(c === a).toBe(true);
    });
});

describe('Point.clone', () => {
    it('A Point can be cloned', () => {
        let a = new Point(10, 45),
            b = a.clone();

        expect(a.getX() === b.getX()).toBe(true);
        expect(a.getY() === b.getY()).toBe(true);
        expect(a.getX()).toBe(10);
        expect(a.getY()).toBe(45);
        expect(a === b).toBe(false);
    });
});

describe('Point.toString', () => {
    it('Show a logical string representation', () => {
        let a = new Point(10, 45);

        expect(a.toString()).toBe('Point(x: 10, y: 45)');
    });
});
