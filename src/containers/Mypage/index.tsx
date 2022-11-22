import React, { useMemo } from 'react'
import { RESPONSIVE_MODE, useResponsiveMode } from '~/utils/useResponsiveMode'
import { HeaderPC, HeaderMobile } from '~/components/Header'
import NavBar from '~/components/NavBar'

const Mypage = () => {
  const responsiveMode = useResponsiveMode()
  const isMobile = useMemo(() => responsiveMode <= RESPONSIVE_MODE.TABLET_MINI, [responsiveMode])

  return (
    <>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <>
          <HeaderPC />
          <NavBar />
        </>
      )}
    </>
  )
}

export default Mypage
