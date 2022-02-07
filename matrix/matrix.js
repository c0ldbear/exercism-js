//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
	_rows = [];
	constructor(matrixString) {
		this._rows = matrixString.split('\n').map((row) => {
			return row.split(' ').map((num) => {
				return Number(num);
			});
		});
	}

	get rows() {
		return this._rows;
	}

	get columns() {
		return this._rows[0].map((_, index) => this._rows.map((row) => row[index]));
	}
}
