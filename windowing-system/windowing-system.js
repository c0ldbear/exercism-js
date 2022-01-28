// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
	this.width = width;
	this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
	this.width = newWidth;
	this.height = newHeight;
};

export function Position(x = 0, y = 0) {
	this.x = x;
	this.y = y;
}

Position.prototype.move = function(newX, newY) {
	this.x = newX;
	this.y = newY;
};

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600);
		this.size = new Size();
		this.position = new Position();
	}

	resize(newSize) {
		// Check the minimum values for height and width
		if (newSize.width < 1 || newSize.height < 1) {
			this.size.width = 1;
			this.size.height = 1;
		} else {
			// Check the values of the position
			this.size.width =
				this.position.x + newSize.width > this.screenSize.width
					? this.screenSize.width - this.position.x
					: newSize.width;
			this.size.height =
				this.position.y + newSize.height > this.screenSize.height
					? this.screenSize.height - this.position.y
					: newSize.height;
		}
	}

	move(newPosition) {
		if (newPosition.x < 0 || newPosition.y < 0) {
			this.position.x = 0;
			this.position.y = 0;
		} else {
			this.position.x =
				this.size.width + newPosition.x > this.screenSize.width
					? this.screenSize.width - this.size.width
					: newPosition.x;
			this.position.y =
				this.size.height + newPosition.y > this.screenSize.height
					? this.screenSize.height - this.size.height
					: newPosition.y;
		}
	}
}

export function changeWindow(newProgramWindow) {
	const newSize = new Size(400, 300);
	const newPosition = new Position(100, 150);
	newProgramWindow.resize(newSize);
	newProgramWindow.move(newPosition);
	return newProgramWindow;
}
