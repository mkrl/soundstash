import React from 'react'
import Hero from './Hero'
import DiscIcon from 'react-feather/dist/icons/disc'

const BlankResponse = props => (
  <Hero>
    <DiscIcon size={64} />
    <p>No releases found.
      <br />
    Give search a better try?</p>
  </Hero>
)

export default BlankResponse
