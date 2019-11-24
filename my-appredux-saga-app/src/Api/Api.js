import axios from 'axios';


export const getUsersData = () => axios.get('https://api.github.com/users');