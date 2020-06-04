import axios from 'axios';
const firebaseAxiosAPI = axios.create({
    baseURL: 'https://us-central1-homepage-john-dola.cloudfunctions.net/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'Provided by John Marco Dola'}
  });

  export default firebaseAxiosAPI;