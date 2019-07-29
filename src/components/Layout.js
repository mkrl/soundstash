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
    overflow: hidden;
    display: flex;
    align-items: center;
    background: #ECEFF2;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
  }
`

const Wrapper = styled.div`
  min-width: 600px;
`

const Layout = props => (
  <>
    <Reset/>
    <GlobalStyle/>

    <Sidebar />
    <Wrapper >
      <Header>Sound Stash</Header>
      <Main>{props.children}</Main>
    </Wrapper>
  </>
)

export default Layout