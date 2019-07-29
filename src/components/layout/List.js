import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import ReactPaginate from 'react-paginate'
import { queryText } from '../../actions/apiActions'
import { connect } from 'react-redux'

const ListArea = styled.ul`
  margin: 0;
`
// This currently should also be changed in api "queryText" action
const PER_PAGE = 12

class List extends React.Component {

  constructor() {
    super()
    this.gotoPage = this.gotoPage.bind(this)
  }

  gotoPage(data) {
    this.props.queryText(this.props.text, data.selected * PER_PAGE)
  }

  render() {
    if (this.props.records) {
      if (this.props.records.length > 0) {

        const items = this.props.records.map(record => {
          const authors = record["artist-credit"][0].name
          return <ListItem key={record.id} title={record.title} authors={authors}/>
        })

        const totalPages = Math.floor(this.props.count/PER_PAGE)
        const currentPage = Math.floor(this.props.offset/PER_PAGE)

        return (
          <>
            <ListArea>
              {items}
            </ListArea> 
            { totalPages > 1 ? 
                      <ReactPaginate  pageCount={totalPages}
                            initialPage={currentPage}
                            pageRangeDisplayed={3}
                            onPageChange={this.gotoPage}
                            disableInitialCallback={true}
                            marginPagesDisplayed={3}
                            previousLabel={"<"}
                            nextLabel={">"}/>
            : null }
          </>
        )
      } else {
        return <p>No releases found</p>
      }
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    text: state.app.searchText,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    queryText: (text, offset) => dispatch(queryText(text, offset)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)