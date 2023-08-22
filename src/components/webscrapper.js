import axios from 'axios';
import cheerio from 'cheerio';



export const webscrapper = (no) => {
    const url = `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${no}`
    
    return axios(url)
        .then(response => {
            // get the unstructured html page 
            const html = response.data;
            console.log(html);

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