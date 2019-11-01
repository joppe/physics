import * as geometry from '@apestaartje/geometry';

import { zero } from '@apestaartje/physics/force/zero';

describe('zero', (): void => {
    it('create a vector with no length', (): void => {
        const z: geometry.vector.Vector = zero();

        expect(z.x).toBe(0);
        expect(z.y).toBe(0);
        expect(geometry.vector.length(z)).toBe(0);
    });
});
