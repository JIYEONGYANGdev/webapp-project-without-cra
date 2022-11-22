// NavBar
export interface NavBarButtonProps {
  key: string
  title: string
  onClick: () => void
}

export const NAVBAR_MENU_BUTTONS: { [key: string]: NavBarButtonProps } = {
  NAV_SERVICE_INFO: {
    key: 'main_nav_service-info',
    title: '서비스 소개',
    onClick: () => console.log('service-info'),
  },
  NAV_FILM_FEST_INFO: {
    key: 'main_nav_film-fest-info',
    title: '영화제 구경하기',
    onClick: () => console.log('film-fest-info'),
  },
  NAV_EVENT_INFO: {
    key: 'main_nav_event-info',
    title: '이벤트',
    onClick: () => console.log(''),
  },
  NAV_BULLETIN: {
    key: 'main_nav_bulletin',
    title: '대화연광장',
    onClick: () => console.log(''),
  },
  NAV_FAQ: {
    key: 'main_nav_faq',
    title: '궁금한점',
    onClick: () => console.log(''),
  },
  NAV_BUSINESS_CONTACT: {
    key: 'main_nav_business-contact',
    title: '사업문의',
    onClick: () => console.log(''),
  },
}

export const DEFAULT_TITLE = '부시만'
export const DEFAULT_DESCRIPTION = '부국제 시간표 만들어드립니다.'
export const DEFAULT_URL = 'busiman-2022.kr'
export const LOGO_URL = 'https://www.busiman-2022.kr/busiman_logo.png'

export default {}
