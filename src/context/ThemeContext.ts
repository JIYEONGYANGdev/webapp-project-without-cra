import React from 'react'

export const theme = {
  responsive: {
    iphone4: 320,
    iphoneSE: 375,
    mobile: 480,
    tabletMini: 768,
    tabletBig: 1024,
    pc: 1440,
    pcL: 1920,
  },
  xPadding: {
    pc: 48,
    tablet: 41,
    mobile: 20,
  },
  yPadding: {
    pc: 96,
    tablet: 96,
    mobile: 64,
  },
  borderRadius: {
    main: 8,
    sub: 4,
  },
  zIndex: {
    header: 1399,
    modal: 1500,
  },
}

export const device = {
  mobileXXS: `(max-width: ${theme.responsive.iphone4}px)`,
  mobileXS: `(max-width: ${theme.responsive.iphoneSE}px)`,
  mobileS: `(max-width: ${theme.responsive.mobile}px)`,
  mobile: `(max-width: ${theme.responsive.tabletMini}px)`,
  tablet: `(min-width: ${theme.responsive.mobile + 1}px) and (max-width: ${theme.responsive.tabletMini}px)`,
  pc: `(min-width: ${theme.responsive.tabletMini + 1}px)`,
  pcL: `(min-width: ${theme.responsive.tabletBig + 1}px)`,
  pcXL: `(min-width: ${theme.responsive.pc}px)`,
  pcXXL: `(min-width: ${theme.responsive.pcL}px)`,
}

export const scTheme = {
  ...theme,
  color: {
    gray900: '#121619',
    gray800: '#21272A',
    gray700: '#343A3F',
    gray600: '#4C545B',
    gray500: '#69717A',
    gray400: '#868E96',
    gray300: '#ADB5BD',
    gray200: '#CFD5DB',
    gray100: '#E9ECEF',
    gray075: '#F0F2F4',
    gray050: '#F7F8F9',
    //..
  },
}

const ThemeContext = React.createContext(theme)

export default ThemeContext
