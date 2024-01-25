import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9d6ca17eb138431d96c0a7f23dbdd969'
  }
});
