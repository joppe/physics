/// <reference path="../../../../typings/globals/jasmine/index.d.ts" />

import {Angle} from 'src/geometry/Angle';

describe('Angle.constructor', () => {
    it('Accept an angle argument', () => {
        let a = new Angle(0);

        expect(a instanceof Angle).toBe(true);
    });
});

describe('Angle.getRadians', () => {
    it('Return the angle in radians', () => {
        let a = new Angle(Math.PI / 2);

        expect(a.getRadians()).toBe(Math.PI / 2);
    });
});

describe('Angle.getDegrees', () => {
    it('Return the angle in degrees', () => {
        let a = new Angle(Math.PI / 2);

        expect(a.getDegrees()).toBe(90);
    });
});

describe('Angle.clone', () => {
    it('An angle can be cloned', () => {
        let a = new Angle(Math.PI / 2),
            b = a.clone();

        expect(a === b).toBe(false);
        expect(a.getDegrees() === b.getDegrees()).toBe(true);
        expect(a.getRadians() === b.getRadians()).toBe(true);
    });
});

describe('Angle.fromDegrees', () => {
    it('An angle can be created from degrees', () => {
        let a = Angle.fromDegrees(90);

        expect(a.getRadians()).toBe(Math.PI / 2);
        expect(a.getDegrees()).toBe(90);
    });
});

describe('Angle.toString', () => {
    it('Show a logical string representation', () => {
        let a = new Angle(Math.PI);

        expect(a.toString()).toBe('Angle(angle: 3.14159 radians)');
    });
});
