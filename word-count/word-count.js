//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
	const counterObj = {};
	const splitSentence = sentence.split(/[\W+]/g); // What's the differens between () and [] in regex?
	for (let word of splitSentence) {
		if (word === '') {
			continue;
		}

		word = word.toLowerCase();

		if (!counterObj[word]) {
			counterObj[word] = 1;
		} else {
			counterObj[word] += 1;
		}
	}
	return counterObj;
};
