import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e99d8741cc26460397f210f2da7184bb',
  },
});
