import React from 'react'
import styled from "styled-components"

import ListItem from './ListItem'

const ListArea = styled.ul`
  margin: 0;
`

const List = props => {
  if (props.records) {
    if (props.records.length > 0) {
      const items = props.records.map(record => <ListItem key={record.id}>{record.title}</ListItem>)
      return(
        <ListArea>
          {items}
        </ListArea>
      )
    } else {
      return <p>Nothing found</p>
    }
  } else {
    return <p>Type to start search</p>
  }
}

export default List