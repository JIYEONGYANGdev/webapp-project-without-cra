import Head from 'next/head'
import React from 'react'
import Mypage from '~/containers/Mypage'

const mypage = () => {
  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
      </Head>
      <Mypage />
    </>
  )
}

export default mypage
