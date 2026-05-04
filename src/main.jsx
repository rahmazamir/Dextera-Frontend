import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import React from 'react'
import ReactDOM from 'react-dom/client';
import DotGrid from './component/DotGrid';
import Ribbons from './component/Ribbons';
import { BookOpen, FileText, Search, CheckCircle, XCircle, ChevronRight, Menu, X, Code } from 'lucide-react';
import Folder from './component/Folder';
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)