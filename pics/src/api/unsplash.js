import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6qWT0tnUSgwG5VjaPtRm1hods2TDbiYAY-kUyj2swWE',
  },
});
