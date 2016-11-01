import {Point} from 'src/geometry/Point';

describe('Point.constructor', () => {
    it('Accept an x and y argument', () => {
        let p = new Point(0, 0);

        expect(p instanceof Point).toBe(true);
    });
});

describe('Point.x', () => {
    it('Return the x value', () => {
        let p = new Point(10, 45);

        expect(p.x).toBe(10);
    });
});

describe('Point.y', () => {
    it('Return the y value', () => {
        let p = new Point(10, 45);

        expect(p.y).toBe(45);
    });
});

describe('Point.add', () => {
    it('Add one point to another and return a new Point', () => {
        let a = new Point(10, 45),
            b = new Point(12, 3),
            c = a.add(b);

        expect(c.x).toBe(22);
        expect(c.y).toBe(48);
        expect(c === a).toBe(false);
        expect(c === b).toBe(false);
    });
});

describe('Point.move', () => {
    it('Move a point and return it self', () => {
        let a = new Point(10, 45),
            c = a.move(12, 3);

        expect(a.x).toBe(22);
        expect(a.y).toBe(48);
        expect(c === a).toBe(true);
    });
});

describe('Point.clone', () => {
    it('A Point can be cloned', () => {
        let a = new Point(10, 45),
            b = a.clone();

        expect(a.x === b.x).toBe(true);
        expect(a.y === b.y).toBe(true);
        expect(a.x).toBe(10);
        expect(a.y).toBe(45);
        expect(a === b).toBe(false);
    });
});

describe('Point.toString', () => {
    it('Show a logical string representation', () => {
        let a = new Point(10, 45);

        expect(a.toString()).toBe('Point(x: 10, y: 45)');
    });
});
