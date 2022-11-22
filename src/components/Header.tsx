import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import { RESPONSIVE_MODE, useResponsiveMode } from '~/utils/useResponsiveMode'

export const HeaderMobile = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={'/busiman_logo.png'} alt="메인 홈 로고" />
        <Title>영화제 시간표 만들어 드립니다.</Title>
      </LogoWrapper>
      <IconWrapper>
        <i className="fa-solid fa-magnifying-glass" />
        <i className="fa-solid fa-bars" />
      </IconWrapper>
    </Wrapper>
  )
}

export const HeaderPC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={'/busiman_logo.png'} alt="메인 홈 로고" />
        <Title>영화제 시간표 만들어 드립니다.</Title>
      </LogoWrapper>
      <LanguageToggleWrapper>
        <i className="fa-solid fa-globe" />
        <button>EN</button> | <button>KR</button>
        {/* TODO: EN(ENGLISH) | KR(한국어) 토글 */}
      </LanguageToggleWrapper>
      <SearchBar />
      <IconWrapper>
        <i className="fa-solid fa-headphones" onClick={() => null} />
        <i className="fa-solid fa-ticket" />
        <i className="fa-solid fa-user" />
      </IconWrapper>
    </Wrapper>
  )
}

const SearchBar = () => {
  const responsiveMode = useResponsiveMode()
  const isTablet = useMemo(() => responsiveMode <= RESPONSIVE_MODE.TABLET_BIG, [responsiveMode])

  return isTablet ? <i className="fa-solid fa-magnifying-glass" /> : <SearchInputBar />
}

const SearchInputBar = () => {
  const $input = useRef<HTMLInputElement>(null)

  return (
    <SearchInputBarWrapper>
      <Input ref={$input} value={$input.current?.value} placeholder={'영화제를 검색해보세요.'} />
      <i className="fa-solid fa-magnifying-glass" />
    </SearchInputBarWrapper>
  )
}

const SearchInputBarWrapper = styled.div`
  .fa-magnifying-glass {
    position: relative;
  }
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border: 2px solid grey;
  border-radius: 16px;

  padding: 8px 12px;
`

const Wrapper = styled.div`
  max-height: 54px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  background-color: #fff4ce;

  @media screen and (min-width: 769px) {
    max-height: 92px;
    padding: 16px 58px 8px 58px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 42px;
    padding-right: 8px;

    @media screen and (min-width: 769px) {
      height: 64px;
      padding-right: 12px;
    }
  }
`

const Title = styled.div`
  font-family: 'HSWinterNoonkott2_0';
  font-weight: 700;
  font-size: 15px;

  @media screen and (min-width: 769px) {
    font-size: 24px;
  }
`

const IconWrapper = styled.div`
  i {
    font-size: 20px;
    padding: 10px 6px;
    cursor: pointer;

    :last-of-type {
      padding-right: 0;
    }
  }
`

const LanguageToggleWrapper = styled.div``
const SearchBarWrapper = styled.div``
