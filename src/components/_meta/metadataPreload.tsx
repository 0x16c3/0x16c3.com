import Head from 'next/head';

export const MetadataPreload = () => {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* <link rel="preload" as="image" type="image/png" href="/meta/apple-touch-icon.png" />
        <link rel="preload" as="image" type="image/png" href="/meta/favicon-16x16.png" />
        <link rel="preload" as="image" type="image/png" href="/meta/favicon-32x32.png" /> */}

        <link rel="preload" crossOrigin="anonymous" as="style" href="https://cdn.jsdelivr.net/npm/normalize.css/normalize.min.css" />
        <link rel="preload" crossOrigin="anonymous" as="style" href="https://cdn.jsdelivr.net/npm/inter-ui/inter.min.css" />

        <link rel="preload" crossOrigin="anonymous" as="font" type="font/woff2" href="https://cdn.jsdelivr.net/npm/inter-ui/Inter%20(web)/Inter.var.woff2" />
        <link rel="preload" crossOrigin="anonymous" as="font" type="font/woff2" href="https://cdn.jsdelivr.net/npm/inter-ui/Inter%20(web)/Inter-roman.var.woff2" />
        <link rel="preload" crossOrigin="anonymous" as="font" type="font/woff2" href="https://cdn.jsdelivr.net/npm/inter-ui/Inter%20(web)/Inter-italic.var.woff2" />
      </Head>
    </>
  );
};
