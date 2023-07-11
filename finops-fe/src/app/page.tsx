import Navbar from './navbar/page'
import styles from './page.module.css'
import type { AppProps } from "next/app";

import React from 'react';
import Layout from "./navbar/layout";

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      {/* <Layout>
        <Component {...pageProps} />;
      </Layout> */}
      Home
      
    </div>
  )
}

export default Home