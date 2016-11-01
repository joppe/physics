interface ObjInterface {
    [id:string]:any;
}

/**
 * @class Obj
 */
class Obj {
    /**
     * @param {object} source
     * @param {Function} func
     */
    static map(source:ObjInterface, func:Function):void {
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                func(source[key], key);
            }
        }
    }

    /**
     * Merge multiple object to one
     *
     * @param {object[]} sources
     * @returns {ObjInterface}
     */
    static merge(...sources:ObjInterface[]):ObjInterface {
        let target:ObjInterface = {};

        sources.forEach((source:ObjInterface) => {
            Obj.map(source, (value:any, key:string) => {
                if (undefined === target[key]) {
                    target[key] = value;
                }
            });
        });

        return target;
    }
}

export {Obj};
