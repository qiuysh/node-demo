import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'antd/dist/antd.css';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>未命名</title>
        </Head>
        <Component {...pageProps} />
    </>
    )
  }
}

