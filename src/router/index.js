import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';

Vue.use(Router);



// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
const base = process.env.NODE_ENV !== 'production' ? '/' : '/myapp/';
const router = new Router({ routes, mode: 'history', base });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
