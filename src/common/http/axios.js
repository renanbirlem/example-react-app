import axios from 'axios';
import i18next from 'i18next';

export const registerAxiosInterceptors = () => {
    axios.interceptors.request.use(config => {
        config.headers = config.headers || {};
        config.headers['Access-Control-Allow-Origin'] = '*';
        return config;
    },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(response => response, (error) => {
        let response = error.response;
        if (error.response.status === 404) {
            response = i18next.t('messages:general.HTTP_NOT_FOUND');
        }
        return Promise.reject(response);
    });
};