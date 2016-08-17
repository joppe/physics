/// <reference path="../../../../typings/globals/jasmine/index.d.ts" />

import {Angle} from 'src/geometry/Angle';

describe('Angle.constructor', () => {
    it('Accept an angle argument', () => {
        let a = new Angle(0);

        expect(a instanceof Angle).toBe(true);
    });
});

describe('Angle.radians', () => {
    it('Return the angle in radians', () => {
        let a = new Angle(Math.PI / 2);

        expect(a.radians).toBe(Math.PI / 2);
    });
});

describe('Angle.degrees', () => {
    it('Return the angle in degrees', () => {
        let a = new Angle(Math.PI / 2);

        expect(a.degrees).toBe(90);
    });
});

describe('Angle.clone', () => {
    it('An angle can be cloned', () => {
        let a = new Angle(Math.PI / 2),
            b = a.clone();

        expect(a === b).toBe(false);
        expect(a.degrees === b.degrees).toBe(true);
        expect(a.radians === b.radians).toBe(true);
    });
});

describe('Angle.toString', () => {
    it('Show a logical string representation', () => {
        let a = new Angle(Math.PI);

        expect(a.toString()).toBe('Angle(angle: 3.14159 radians)');
    });
});
