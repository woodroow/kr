import React from 'react';
import Head from 'next/head';
import Cover from '../components/blocks/Cover';
import favicon from '../assets/favicon.ico';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <div>
    <Head>
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
      <title>Курсовая работа</title>
    </Head>
    <Cover />
  </div>
);
