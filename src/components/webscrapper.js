// import cheerio  from "cheerio";
import axios from 'axios';
import cheerio from 'cheerio';

export function webscrapper(no, category) {
  let apiUrl = '';
  const api = '354cd130-6350-11ee-8142-63b626a2887f';
  const careerUrl = `https://app.zenscrape.com/api/v1/get?apikey=${api}&url=https://www.horoscope.com/us/horoscopes/${category}/horoscope-${category}-daily-today.aspx?sign=${no}`;
  const loveUrl = `https://app.zenscrape.com/api/v1/get?apikey=${api}&url=https://www.horoscope.com/us/horoscopes/${category}/horoscope-${category}-daily-today.aspx?sign=${no}`;
  const moneyUrl = `https://app.zenscrape.com/api/v1/get?apikey=${api}&url=https://www.horoscope.com/us/horoscopes/${category}/horoscope-${category}-weekly.aspx?sign=${no}`;
  const healthUrl = `https://app.zenscrape.com/api/v1/get?apikey=${api}&url=https://www.horoscope.com/us/horoscopes/${category}/horoscope-${category}-daily-today.aspx?sign=${no}`;
  const generalUrl = `https://app.zenscrape.com/api/v1/get?apikey=${api}&url=https://www.horoscope.com/us/horoscopes/${category}/horoscope-${category}-daily-today.aspx?sign=${no}`;

  switch (category) {
    case 'love':
      apiUrl = loveUrl;
      break;
    case 'career':
      apiUrl = careerUrl;
      break;
    case 'money':
      apiUrl = moneyUrl;
      break;
    case 'health':
      apiUrl = healthUrl;
      break;
    default:
      apiUrl = generalUrl;
      break;
  }

  const options = {
    url: apiUrl,
  };

  return axios(options)
    .then((response) => {
      if (response.status === 200) {
        const responseText = response.data;

        const $ = cheerio.load(responseText);

        // get the specific content from the classname
        const mainHorDiv = $('.main-horoscope');

        // find the first paragraph & remove the strong tag
        const p = mainHorDiv.find('p:first-of-type');
        p.find('strong').remove();

        // get the text content and remove the first 3 characters
        const description = p.text().slice(2);
        return description;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
