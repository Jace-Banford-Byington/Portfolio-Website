import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Components/home';
import reportWebVitals from './reportWebVitals';
import { path } from 'express/lib/application';

const router = createBrowser({
   {
  path: '/',
    element : <>
    <Nav />
    <Home />
    </>
   },
  {

  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Home />
//   </Router>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
