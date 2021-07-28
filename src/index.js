import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './layout/Head'
import Layout from './layout/Layout'
// import BarGraph from './views/BarGraph'

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);