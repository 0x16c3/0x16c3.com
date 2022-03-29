import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

import { AppProps } from 'next/app';

import { globalStyles } from '@styles/stitches.config';

import { MetadataSeo } from '@/components/_meta/metadataSeo';
import { MetadataPreload } from '@/components/_meta/metadataPreload';

const Prism = require(`prismjs`);

//load all the language files
require(`prismjs/components/prism-python`);
require(`prismjs/components/prism-c`);

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <MetadataSeo />
      <MetadataPreload />

      <Component {...pageProps} />
    </>
  );
}
