import {Obj} from 'ts/src/helper/Obj';

describe('Obj', () => {
    it('map', () => {
        let o = {
                foo: 'foo value',
                bar: 'bar value'
            },
            keys = ['foo', 'bar'],
            values = ['foo value', 'bar value'],
            k = [],
            v = [];

        Obj.map(o, (value:any, key:string) => {
            k.push(key);
            v.push(value);
        });

        expect(k).toEqual(keys);
        expect(v).toEqual(values);
    });

    it('merge', () => {
        let a = {
                foo: 'bar'
            },
            b = {
                foo: 2,
                bar: 'x',
                t: []
            },
            c = {
                t: 0
            },
            t1 = Obj.merge(a, b, c),
            t2 = Obj.merge(b, c, a);

        expect(t1).toEqual({
            foo: 'bar',
            bar: 'x',
            t: []
        });

        expect(t2).toEqual({
            foo: 2,
            bar: 'x',
            t: []
        });
    });
});
