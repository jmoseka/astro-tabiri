// import cheerio  from "cheerio";
import axios from "axios";
import cheerio from "cheerio";

export function getBee(no) {

const options = {
  url: `https://app.zenscrape.com/api/v1/get?apikey=c5074390-41e6-11ee-94ea-b935f1a20514&url=https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${no}`
};

return axios(options)
  .then(response => {
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
  .catch(error => {
    console.error('Error:', error);
  });




    // let desc = ''

    // function httpGetAsync(url, callback) {
    //     const xmlHttp = new XMLHttpRequest();
    //     xmlHttp.onreadystatechange = function() {
    //         if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
    //             callback(xmlHttp.responseText);
    //     };
    //     xmlHttp.open("GET", url, true); // true for asynchronous
    //     xmlHttp.send();
    // }

    // const url = "https://scrape.abstractapi.com/v1/?block_ads=true&render_js=false&api_key=f7e20d38e74c4bb28c81538f5ce50b2d&url=https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4";

    // httpGetAsync(url, function(responseText) {
    //     const $ = cheerio.load(responseText);

    //         // get the specific content from the classname
    //         const mainHorDiv = $('.main-horoscope');

    //         // find the first paragraph & remove the strong tag
    //         const p = mainHorDiv.find('p:first-of-type');
    //         p.find('strong').remove();

    //         // get the text content and remove the first 3 characters
    //         const description = p.text().slice(2);
    //         desc = description;
    //         console.log(description);
    // });

    // return desc;
}


