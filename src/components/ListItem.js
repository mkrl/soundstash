import React from 'react'
import styled from "styled-components"
import StarIcon from 'react-feather/dist/icons/star'

const Item = styled.li`
  background-color: grey;
  color: white;
  & svg.fav {
    color: yellow;
  }
`

const ListItem = props => {
  const record = {
    id: props.id,
    title: props.title,
    authors: props.authors,
  }
  return (
    <Item>
      {props.title} by {props.authors}
      <StarIcon className={props.fav? "fav" : ""} onClick={() => props.toggle(record, props.fav)}/>
    </Item>
  )
}

export default ListItem