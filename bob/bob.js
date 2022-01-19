//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (Message) => {
	const message = Message.trim();

	if (checkUpperCase(message) && checkQuestion(message)) {
		if (checkForOnlyNumbers(message)) {
			return 'Sure.';
		}
		return "Calm down, I know what I'm doing!";
	}

	if (checkUpperCase(message) && !checkForOnlyNumbers(message)) {
		return 'Whoa, chill out!';
	}

	if (checkQuestion(message)) {
		return 'Sure.';
	}

	if (message) {
		return 'Whatever.';
	}

	// silence?
	return 'Fine. Be that way!';
};

// Help functions
const checkUpperCase = (m) => {
	return m === m.toUpperCase();
};

const checkLowerCase = (m) => {
	return m === m.toLowerCase();
};

const checkForOnlyNumbers = (m) => {
	return checkUpperCase(m) && checkLowerCase(m);
};

const checkQuestion = (m) => {
	return m[m.length - 1] === '?';
};
