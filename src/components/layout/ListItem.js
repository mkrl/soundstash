import React from 'react'
import styled from "styled-components"

const Item = styled.li`
  background-color: grey;
  color: white;
`

const ListItem = props => {
  return (
    <Item>
      {props.title} by {props.authors}
    </Item>
  )
}

export default ListItem