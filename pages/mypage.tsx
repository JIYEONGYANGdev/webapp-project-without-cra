import React from 'react'
import styled from 'styled-components'
import styles from './Mypage.module.scss'

const mypage = () => {
  return (
    <>
      <Header />
    </>
  )
}

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={'/busiman_logo.png'} alt="메인 홈 로고" />
        <Title>영화제 시간표 만들어 드립니다.</Title>
      </LogoWrapper>
      <IconWrppaer>
        <i className="fa-solid fa-magnifying-glass" />
      </IconWrppaer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-height: 54px;

  display: flex;
  justify-content: space-between;

  padding: 10px 20px;
  background-color: #fff4ce;

  @media screen and (min-width: 769px) {
    max-height: 92px;
    padding: 16px 58px;
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
    }
  }
`

const Title = styled.div`
  font-family: 'HSWinterNoonkott2_0';
  font-weight: 700;
  font-size: 15px;
`

const IconWrppaer = styled.div`
  i {
    font-size: 20px;
  }
`

export default mypage
