import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import HomePage from './roots/HomePage';
import Profile from './roots/Profile';
import DayPreview from './components/DayPreview'
import WeekPreview from './components/WeekPreview'
import MonthPreview from './components/MonthPreview'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
      <Route path='/' element={<HomePage/>} >
        <Route index={true} path='/' element={<DayPreview/>}/>
        <Route path='/week' element={<WeekPreview/>}/>
        <Route path='/month' element={<MonthPreview/>}/>
      </Route>
      <Route path='/profile' element={<Profile/>} />
    </Route>
  )
) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);