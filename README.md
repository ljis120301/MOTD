# MOTD (Message of the Day)

A CLI tool that displays mysterious messages from beyond. 👻

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or download this repository
2. Navigate to the project directory:

```bash
cd MOTD
```

3. Install dependencies:

```bash
npm install
```

4. Make the CLI globally available on your system:

```bash
npm link
```

## Usage

After installation, you can use the CLI in two ways:

```bash
motd message    # Display a random message
motd --help  # Show help menu
```

### Available Options

- `-c, --clear`: Clear the console
- `-d, --debug`: Print debug information

## Project Structure

- `index.js`: Main CLI entry point
- `utils/`: Helper functions and utilities
- `messages.json`: Collection of mysterious messages

## Files You Need

Make sure you have all these files in your project:
- package.json
- index.js
- messages.json
- utils/
  - cli.js
  - init.js
  - log.js

## Troubleshooting

If you get permission errors when running the CLI:
1. Make sure the index.js file is executable:

```bash
chmod +x index.js
```

2. If `npm link` requires sudo:

```bash
sudo npm link
```

## License

GNU License - see package.json for details.

## Author

Created by lain (whoisjason.me)
