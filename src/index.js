import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './index.css';
import App from './App';
import AuthProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer position='top-center' />
      <App /> 
    </AuthProvider>
  </React.StrictMode>
);

