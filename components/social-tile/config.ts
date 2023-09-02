const axios = require('axios');

export const getTwitterInfo = () => {

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.twitter.com/1.1/users/show.json?screen_name=hkking31',
  headers: { 
    'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`, 
  }
};

return axios.request(config)
.then((response: any) => response.data)
.catch((error: any) => {
  console.log(error);
});

}