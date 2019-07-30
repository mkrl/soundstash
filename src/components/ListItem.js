import React from 'react'
import styled from "styled-components"
import StarIcon from 'react-feather/dist/icons/star'

const Item = styled.li`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #eceff2 solid;
  align-items: center;
  & h3 {
    font-size: 20px;
    margin-bottom: 0.5rem;
  }
  & h5 {
    font-size: 16px;
    color: #949494;
  }
  & svg.fav {
    cursor: pointer;
  }
  & svg.fav {
    fill: black;
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
      <div>
        <h3>{props.title}</h3>
        <h5>{props.authors}</h5>
      </div>
      <StarIcon className={props.fav ? "fav" : ""} onClick={() => props.toggle(record, props.fav)} />
    </Item>
  )
}

export default ListItem