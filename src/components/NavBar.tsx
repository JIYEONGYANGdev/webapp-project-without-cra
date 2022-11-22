import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Wrapper>
      <Button key={'main_nav_service-info'} onClick={() => console.log('서비스 소개')}>
        서비스 소개
      </Button>
      <Button key={'main_nav_service-info'} onClick={() => console.log('영화제 구경하기')}>
        영화제 구경하기
      </Button>
      <Button key={'main_nav_service-info'} onClick={() => console.log('이벤트')}>
        이벤트
      </Button>
      <Button key={'main_nav_service-info'} onClick={() => console.log('대화연광장')}>
        대화연광장
      </Button>
      <Button key={'main_nav_service-info'} onClick={() => console.log('궁금한점')}>
        궁금한점
      </Button>
      <Button key={'main_nav_service-info'} onClick={() => console.log('사업문의')}>
        사업문의
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff4ce;
  padding: 10px 24px 16px 24px;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-family: 'YComputer';
  font-size: 16px;

  padding: 0 20px;

  cursor: pointer;

  :first-of-type {
    padding-right: 24px;
    border-right: 2px solid grey;
  }

  :last-of-type {
    border-left: 2px solid grey;
  }
`

export default NavBar
