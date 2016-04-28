/**
 * @class Matrix
 */
export class Matrix {
    /**
     * @param {Array} elements
     * @throws {Error}
     */
    constructor(elements) {
        if (false === Matrix.isValid(elements)) {
            throw new Error('Invalid elements provided for Matrix constructor.');
        }

        this.elements = elements;
    }

    /**
     * @returns {{columns: Number, rows: Number}}
     */
    dimensions() {
        return {
            columns: this.columns(),
            rows: this.rows()
        };
    }

    /**
     * @returns {Number}
     */
    columns() {
        return this.elements[0].length;
    }

    /**
     * @returns {Number}
     */
    rows() {
        return this.elements.length;
    }

    /**
     * @param {Number} row
     * @param {Number} column
     * @returns {*}
     */
    getElement(row, column) {
        if (this.rows() - 1 < row || this.columns() - 1 < column) {
            throw new Error(`Invalid arguments row: ${row}; column: ${column};`);
        }

        return this.elements[row][column];
    }

    /**
     * @returns {Matrix}
     */
    clone() {
        let elements = [];

        this.elements.forEach((row) => {
            let cells = [];

            row.forEach((cell) => {
                cells.push(cell);
            });

            elements.push(cells);
        });

        return new Matrix(elements);
    }

    /**
     * @param {Array} elements
     * @returns {boolean}
     */
    static isValid(elements) {
        let isValid = true;

        if (Array.isArray(elements)) {
            let columnCount = 0;

            elements.every((row, index) => {
                if (Array.isArray(row)) {
                    if (0 === index) {
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
