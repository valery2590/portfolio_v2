// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Puedes agregar aquí hojas de estilo, fuentes o metadatos */}
        <link rel="stylesheet" href="https://path-to-your-stylesheet.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {/* Aquí puedes agregar clases o atributos personalizados al body */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
