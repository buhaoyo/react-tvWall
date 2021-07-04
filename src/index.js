import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from '../src/views/layout/Head'
import Layout from '../src/views/layout/Layout'
// import BarGraph from '../src/views/BarGraph'

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);