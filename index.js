#!/usr/bin/env node

/**
 * @author Olga Shabalina < >
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

// connecting to db file
const db = require('./database');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if (input.includes('list')) {
		const res = await db
	}
})();
