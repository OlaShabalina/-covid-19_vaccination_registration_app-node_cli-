#!/usr/bin/env node

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

// inmporting request functions (add new user and list of users)
const {
	addUser,
  listUsers
} = require('./db.functions.js');


// connecting to db file
const db = require('./database');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {

	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	// printing out a list of users on comand "list"
	if (input.includes('list')) {
		listUsers();
	}

	// adding a new user
	if (input.includes('new')) {
		addUser();
	}


})();
