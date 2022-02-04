import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from './Form'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/form" element={<Form />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


