import React from 'react'
import styled from 'styled-components'
import note from '../assets/loader.svg'

const Image = styled.img`
  max-width: 300px;
`

const Loader = () => <Image src={note} alt="Loading..."/>

export default Loader