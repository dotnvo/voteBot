const puppeteer = require('puppeteer');

(async () => {
try {

    const pollURL = process.env.POLLURL || 'https://poll.fm/15113232';

    const answerId = process.env.ANSWERID || 'PDI_answer66930269';



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

        deviceScaleFactor: 1,

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



    await delay(500); // Wait for 500 milliseconds

    await browser.close();

    console.log('Browser closed.');

} catch (error) {

    console.error('Error:', error);

}

})();

async function delay(ms) {

return new Promise(resolve => setTimeout(resolve, ms));
}