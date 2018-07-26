import history from '../../config/history';
import dashRoutes from 'common/routes/dashboard';

// const queryString = require('./query-string');

// export function getParams(url){
//     return queryString.parse(url);
// };

export function clearParams(location){
    history.push(location.pathname);
}

export function replacePathParams(path = '', params = {}) {
    if (typeof path !== 'string') {
        throw new Error('path should be a string');
    }

    return Object.keys(params).reduce((previousValue, currentValue) => {
        return previousValue.replace(`:${currentValue}`, params[currentValue])
    }, path);
}

export function getRoutePath(pathName = '') {
    return (dashRoutes.find(route => route.name === pathName) || {}).path;
}