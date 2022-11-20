import Head from 'next/head'
import React from 'react'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, DEFAULT_URL, LOGO_URL } from '~/consts'

const Index = () => (
  <>
    <Head>
      <title>{DEFAULT_TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
      <meta name="description" content={DEFAULT_DESCRIPTION} />

      <meta property="busiman:type" content="website" />
      <meta property="busiman:title" content={DEFAULT_TITLE} />
      <meta property="busiman:description" content={DEFAULT_DESCRIPTION} />
      <meta property="busiman:image" content={LOGO_URL} />
      <meta property="busiman:url" content={DEFAULT_URL} />
    </Head>

    <>
      <body id="_app">hi</body>
    </>
  </>
)

export default Index
