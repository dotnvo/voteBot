const puppeteer = require('puppeteer');

(async () => {
// 	const pollURL = 'https://poll.fm/11051204';
// 	const answerId = 'PDI_answer50714388';
	const pollURL = process.env.POLLURL;
	const answerId = process.env.ANSWERID;

	const browser = await puppeteer.launch({
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox'
		]
	});
	const page = await browser.newPage();
	await page.setViewport({
		width: 1920,
		height: 1080,
		deviceScaleFactor: 3,
		isMobile: false,
		hasTouch: false,
		isLandscape: false
	});
	console.log('Page opened.');

	await page.goto(pollURL, { waitUntil: 'networkidle2' });
	console.log('Page loaded.');

	await page.waitForSelector('#' + answerId);
	await page.click('input#' + answerId);
	console.log('Answer chosen.');

	await page.waitForSelector('#poll > div > div > div > div > main > form > div.css-vote.pds-vote > div > a');
	await page.click('#poll > div > div > div > div > main > form > div.css-vote.pds-vote > div > a');
	console.log('Voted.');
	setTimeout(function() {
		browser.close();
	}, 500);
	console.log('Finished Iteration');
	 

})();
