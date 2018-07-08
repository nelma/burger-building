import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-34c31.firebaseio.com/'
});

export default instance;