import axios from 'axios';

const isDevMode = process &&
    process.env &&
    process.env.NODE_ENV === 'development';

let BASE_URL = '/backend';

if (isDevMode) {
    BASE_URL = 'http://127.0.0.1:9090/backend';
}

console.log('Backend conectado: ', BASE_URL);

const executeRequest = (method, url, data, differentContext) => (axios[method](`${differentContext ? differentContext : BASE_URL}${url}`, data));

export default {
    get: url => executeRequest('get', url),
    query: url => executeRequest('get', url),
    queryPost: (url, data, differentContext) => executeRequest('post', url, data, differentContext),
    save: (url, data) => executeRequest('post', url, data),
    update: (url, data) => executeRequest('put', url, data),
    remove: url => executeRequest('delete', url),
    multipart: (url, data) => executeRequest('post', url, data),
};
