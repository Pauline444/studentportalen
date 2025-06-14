import { StrictMode } from 'react'
import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import { CourseProvider } from './context/CourseContext'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CourseProvider>
  </StrictMode>
)
