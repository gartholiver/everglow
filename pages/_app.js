import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.css';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <ParallaxProvider>
        <Component {...pageProps} key={router.asPath} />
      </ParallaxProvider>
    </FaustProvider>
  );
}
