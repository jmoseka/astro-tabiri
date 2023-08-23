import axios  from 'axios';

export async function getBee() {
    console.log('here');
    //const url = `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${4}`;
    // request Axios
axios.get('https://app.scrapingbee.com/api/v1', {
    params: {
        'api_key': 'ZYIPPML9A4A6DLUOK93AEGC2497DE5R48N3488QMHPBKV8AMYNFQU9CLHFWA5SKDV12KLA0L5IAZ1ULK',
        'url': `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${4}`,
        render_js: true,
        block_resources: true,
        premium_proxy: true,
    }
}).then(function (response) {
    // handle success
    console.log(response);
})

}

