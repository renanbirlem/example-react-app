import createBrowserHistory from 'history/createBrowserHistory';

const isDevMode = process &&
                  process.env &&
                  process.env.NODE_ENV === 'development';

let contextPath = '/exampleApp';

if(isDevMode)
  contextPath = '/';

const history = createBrowserHistory({
  basename: contextPath
});


export default history;
