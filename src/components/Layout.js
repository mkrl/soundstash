import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Reset } from 'styled-reset'
import Header from './layout/Header'
import Main from './layout/Main'
import Sidebar from './layout/Sidebar'

const GlobalStyle = createGlobalStyle`
  #app {
    font-size: 16px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: #ECEFF2;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
`

const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  height: 75vh;
  padding: 3rem;
  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 0;
    width: 100%;
    padding: 0.5rem;
    height: 95%;
  }
`

const MainArea = styled.div`
  min-width: 600px;
  height: 100%;
  @media (max-width: 992px) {
    padding: 0.5rem;
    overflow-y: auto;
    min-width: unset;
  }
`

const Layout = props => (
  <Wrapper>
    <Reset />
    <GlobalStyle />

    <Sidebar />
    <MainArea >
      <Header>
          Sound Stash
      </Header>
      <Main>{props.children}</Main>
    </MainArea>
  </Wrapper>
)

export default Layout
