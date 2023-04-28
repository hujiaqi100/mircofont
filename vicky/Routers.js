import App from './src/App.jsx';
import Login from './src/Login/login.jsx';
import React from 'react';
export default [
  {
    path: '/dqp',
    component: App,
    // loadData: App.loadData,
    key: 'dqp',
    routes: [
      {
        path: '/dqp/mushroom',
        component: App,
        exact: true,
        loadData: App.loadData,
        key: 'test1'
      },
      {
        path: '/dqp/clover',
        component: App,
        exact: true,
        loadData: App.loadData,
        key: 'test2'
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    loadData: Login.loadData,
    key: 'login',
  }
];