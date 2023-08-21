import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
import cheerio from 'https://cdn.jsdelivr.net/npm/cheerio@1.0.0-rc.12/+esm';


export const webscrapper = (no) => {
    const url = `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${no}`
    return axios(url)
        .then(response => {
            // get the unstructured html page 
            const html = response.data;

            // parse through "cheerio" library for easy manipulation
            const $ = cheerio.load(html);

            // get the specific content from the classname
            const mainHorDiv = $('.main-horoscope');

            // find the first paragraph & remove the strong tag
            const p = mainHorDiv.find('p:first-of-type');
            p.find('strong').remove();

            // get the text content and remove the first 3 characters
            const description = p.text().slice(2);
            return description;
        })
        .catch(error => {
            throw error;
        });
};