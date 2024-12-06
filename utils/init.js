import unhandled from 'cli-handle-unhandled';
import welcome from 'cli-welcome';
import { getPackageJson } from 'get-package-json-file';
import figlet from 'figlet';
	
export default async ({ clear = true }) => {
	unhandled();
	const pkgJson = await getPackageJson(`./../package.json`);

	if (clear) {
		console.clear();
	}

	console.log(
		figlet.textSync('MOTD', {
			font: 'ANSI Shadow',
			horizontalLayout: 'default',
			verticalLayout: 'default'
		})
	);

	welcome({
		title: `MOTD`,
		tagLine: `by lain`,
		description: pkgJson.description,
		version: pkgJson.version,
		bgColor: '#A699EA',
		color: '#000000',
		bold: true,
		clear: false
	});
};
