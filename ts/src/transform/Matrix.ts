/**
 * @interface MatrixElementArray
 */
interface MatrixElementArray extends Array<number[]> {
}

/**
 * @interface MatrixIndexInterface
 */
interface MatrixIndexInterface {
    /**
     * @type {number}
     */
    row:number;

    /**
     * @type {number}
     */
    column:number;
}

/**
 * @class Matrix
 */
class Matrix {
    /**
     * @type {number[][]}
     */
    private _elements:MatrixElementArray;

    /**
     * @returns {number}
     */
    get size():number {
        return this._elements.length;
    }

    /**
     * @param {number[][]} elements
     * @throws {Error}
     */
    constructor(elements:MatrixElementArray) {
        if (false === Matrix.validateElements(elements)) {
            throw new Error('Invalid elements array provided for Matrix constructor.');
        }

        this._elements = elements;
    }

    /**
     * @param {object} index
     * @returns {number}
     */
    get(index:MatrixIndexInterface):number {
        if (false === this.isValidIndex(index)) {
            throw new Error(`Invalid arguments row: ${index.row}; column: ${index.column};`);
        }

        return this._elements[index.row][index.column];
    }

    /**
     * @param {object} index
     * @param {number} value
     * @returns {Matrix}
     */
    set(index:MatrixIndexInterface, value:number) {
        if (false === this.isValidIndex(index)) {
            throw new Error(`Invalid arguments row: ${index.row}; column: ${index.column};`);
        }

        this._elements[index.row][index.column] = value;

        return this;
    }

    /**
     * @returns {Matrix}
     */
    clone():Matrix {
        let elements = [];

        this._elements.forEach((row:number[]) => {
            let cells = [];

            row.forEach((cell:number) => {
                cells.push(cell);
            });

            elements.push(cells);
        });

        return new Matrix(elements);
    }

    /**
     * Check if the row and column indexes are correct
     *
     * @param {object} index
     * @returns {boolean}
     */
    isValidIndex(index:MatrixIndexInterface):boolean {
        let size:number = this.size;

        return (
            index.row >= 0 &&
            index.row < size &&
            index.column  >= 0 &&
            index.column < size
        );
    }

    /**
     * @param {number[][]} elements
     * @returns {boolean}
     */
    static validateElements(elements:MatrixElementArray):boolean {
        let isValid:boolean = true;

        if (Array.isArray(elements)) {
            let columnCount:number = 0;

            elements.every((row:number[], rowIndex:number) => {
                if (Array.isArray(row)) {
                    if (0 === rowIndex) {
                        columnCount = row.length;
                    } else {
                        isValid = row.length === columnCount;
                    }
                } else {
                    isValid = false;
                }

                return isValid;
            });
        } else {
            isValid = false;
        }

        return isValid;
    }
}

export {Matrix, MatrixElementArray, MatrixIndexInterface};
