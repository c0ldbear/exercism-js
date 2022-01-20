/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
	return { name, age, ticketId };
	// The above is the same as the code line below
	// return {name: name, age: age, ticketId: ticketId}
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
	const ticketId = 'ticketId';
	visitor[ticketId] = visitor[ticketId] ? null : null;
	return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
	const name = tickets[ticketId];
	if (name) {
		return `sold to ${name}`;
	}

	if (name === null) {
		return `not sold`;
	}

	// when name is undefined
	return `unknown ticket id`;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
	const name = tickets[ticketId];
	if (name !== null && name !== undefined) {
		return `${name}`;
	}
	return `invalid ticket !!!`;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if (visitor.gtc?.signed) {
    return visitor.gtc.version;
  }
  return;
}
