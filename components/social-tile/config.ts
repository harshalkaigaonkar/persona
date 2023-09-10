import axios from 'axios';

export const getTwitterInfo = async () => {
  const res = await axios.get('https://api.twitter.com/1.1/users/show.json?screen_name=hkking31', {
    headers: {
      'authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`, 
    }
  })
  return res;
}