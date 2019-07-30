import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

const Area = styled.div`
  & ul {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    color: #949494;
  }
  & li {
    padding: 0.5rem;
    cursor: pointer;
  }
  & li.selected {
    color: black;
  }
`
const Paginator = props => <Area><ReactPaginate {...props}/></Area>

export default Paginator