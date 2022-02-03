//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
	return rna !== '' ? transcribeRna(rna) : '';
};

const RNA = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
};

function transcribeRna(rna) {
	return rna.split('').map((nuclide) => RNA[nuclide]).join('');
}
