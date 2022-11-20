import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/busiman_logo.png" sizes="32x32" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.1/css/all.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
