import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import AddTender from '@/components/AddTender';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/add',
      name: 'AddTender',
      component: AddTender,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
