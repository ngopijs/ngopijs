import ora from 'ora';

const spinner = ora({
	spinner: 'line',
	prefixText: '☕️ Brewing soon'
}).start()

setTimeout(() => {
	spinner.stopAndPersist()
	console.log("See you soon @ ngopi.js - Coffee & Code :)")
}, 5000)
