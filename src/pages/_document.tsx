import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Root Logic - Where Tradition Meets Innovation" />
        {/* This script only runs on GitHub Pages and fixes all paths */}
        <script src="/fix-github-paths.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 