import App from './client/app';
import Header from './client/header';
import Home from './client/home';

let routes = {
  component: App,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/counter', component: Header }
  ]
};

export default routes;