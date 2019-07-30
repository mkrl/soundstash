import React from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"
import { connect } from 'react-redux'
import { Reset } from 'styled-reset'

import Header from './layout/Header'
import Main from './layout/Main'
import Sidebar from './layout/Sidebar'

const GlobalStyle = createGlobalStyle`
  #app {
    font-size: 16px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    background: #ECEFF2;
    flex-direction: row;
    justify-content: center;
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
  }
`

const MainArea = styled.div`
  min-width: 600px;
  @media (max-width: 992px) {
    width: 100%;
    overflow-y: auto;
  }
`

const Layout = props => (
  <Wrapper>
    <Reset/>
    <GlobalStyle/>

    <Sidebar />
    <MainArea >
      <Header>Sound Stash</Header>
      <Main>{props.children}</Main>
    </MainArea>
  </Wrapper>
)

export default Layout