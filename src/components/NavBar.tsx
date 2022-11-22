import React, { useMemo } from 'react'
import styled from 'styled-components'
import { NAVBAR_MENU_BUTTONS } from '~/consts'

const NavBar = () => {
  const navMenuKeys = useMemo(() => Object.keys(NAVBAR_MENU_BUTTONS), [NAVBAR_MENU_BUTTONS])

  return (
    <Wrapper>
      {navMenuKeys.map((menu) => (
        <Button key={NAVBAR_MENU_BUTTONS[menu].key} onClick={NAVBAR_MENU_BUTTONS[menu].onClick}>
          {NAVBAR_MENU_BUTTONS[menu].title}
        </Button>
      ))}
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
