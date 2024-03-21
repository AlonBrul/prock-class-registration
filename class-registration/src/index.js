import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import HomePage from './roots/HomePage';
import Profile from './roots/Profile';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter(
  <Route path='/' element={<App/>}> 
    <Route index={true} path='/' element={<HomePage/>} />
    <Route path='/profile' element={<Profile/>} />
  </Route>
) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);