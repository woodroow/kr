import React from 'react';
import Head from 'next/head';
import favicon from '../assets/favicon.ico';
import LayoutMain from '../components/layouts/LayoutMain';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <div>
    <Head>
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
      <title>Главная</title>
    </Head>
    <LayoutMain>main </LayoutMain>
  </div>
);
