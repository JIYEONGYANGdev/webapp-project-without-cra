import React, { useState, useEffect, useContext } from 'react'
import throttle from 'lodash/throttle'
import ThemeContext from 'context/ThemeContext'

export const RESPONSIVE_MODE = Object.freeze({
  MOBILE: 1,
  TABLET_MINI: 10,
  TABLET_BIG: 100,
  PC: 1000,
})

function getResponsiveMode(responsive) {
  if (window.innerWidth <= responsive.mobile) {
    return RESPONSIVE_MODE.MOBILE
  }

  if (window.innerWidth <= responsive.tabletMini) {
    return RESPONSIVE_MODE.TABLET_MINI
  }

  if (window.innerWidth <= responsive.tabletBig) {
    return RESPONSIVE_MODE.TABLET_BIG
  }

  return RESPONSIVE_MODE.PC
}

export const useResponsiveMode = () => {
  const themeContext = useContext(ThemeContext)
  const [responsiveMode, setResponsiveMode] = useState(null)

  useEffect(() => {
    setResponsiveMode(getResponsiveMode(themeContext.responsive))

    const updateWindowDimensions = throttle(function () {
      setResponsiveMode(getResponsiveMode(themeContext.responsive))
    }, 200)

    window.addEventListener('resize', updateWindowDimensions)
    updateWindowDimensions()

    return () => {
      updateWindowDimensions.cancel()
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  return responsiveMode
}
