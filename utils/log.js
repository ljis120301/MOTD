import alert from 'cli-alerts';

export default (info, isDebug = false) => {
	if (isDebug) {
		alert({
			type: `warning`,
			name: `DEBUG LOG`,
			msg: ``
		});
	}

	console.log(info);
	console.log();
};
