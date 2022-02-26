import axios from 'axios';

const api = {
  getCoinData: () => {
    return axios.get(
      'http://api.coinlayer.com/api/list?access_key=1935fb1087e519cd0092976a6c34426d',
    );
  },
};

export default api;
