#!/usr/bin/env node

/**
 * MOTD
 * displays a message from god
 *
 * @author lain <whoisjason.me>
 */

import cli from './utils/cli.js';
import init from './utils/init.js';
import log from './utils/log.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import figlet from 'figlet';
const { flags, input, showHelp } = cli;
const { clear, debug } = flags;

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
	await init({ clear });
	debug && log(flags);
	input.includes(`help`) && showHelp(0);

	if (input.includes(`message`)) {
		// Read and parse the JSON file
		const messagesFile = readFileSync(join(__dirname, 'messages.json'), 'utf8');
		const { messages } = JSON.parse(messagesFile);
		
		// Get a random message
		const randomMessage = messages[Math.floor(Math.random() * messages.length)];
		log(randomMessage);
	}
})();
