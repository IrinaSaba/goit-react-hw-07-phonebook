import axios from 'axios';

axios.defaults.baseURL = 'https://6213890a89fad53b1ff82a14.mockapi.io';
export const addContactApi = newContact => {
  return axios
    .post('/contacts', newContact)
    .then(({ data }) => data)
    .catch(err => err);
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(err => err);
};
