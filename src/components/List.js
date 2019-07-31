import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import BlankResponse from './layout/BlankResponse'
import Paginator from './layout/Paginator'
import { queryText } from '../actions/apiActions'
import { updateBookmarks } from '../actions/bookmarkActions'
import { connect } from 'react-redux'

const ListArea = styled.ul`
  overflow-y: auto;
  margin: 0;
`
// This currently should also be changed in api "queryText" action
const PER_PAGE = 20

class List extends React.Component {
  constructor () {
    super()
    this.gotoPage = this.gotoPage.bind(this)
    this.checkIfFaivorite = this.checkIfFaivorite.bind(this)
    this.toggleFaivotite = this.toggleFaivotite.bind(this)
  }

  gotoPage (data) {
    this.props.queryText(this.props.text, data.selected * PER_PAGE)
  }

  checkIfFaivorite (id) {
    if (this.props.bookmarks.length > 0) {
      // Ugly, but works. Implict type coercion of either item or undefined to boolean.
      return Boolean(this.props.bookmarks.find(item => item.id === id))
    } else {
      return false
    }
  }

  toggleFaivotite (record, currentState) {
    let newBookmarks = []
    if (currentState === true) {
      newBookmarks = this.props.bookmarks.filter(item => item.id !== record.id)
    } else {
      newBookmarks = [...this.props.bookmarks, record]
    }
    this.props.updateBookmarks(newBookmarks)
  }

  // TODO: Move some of the noodle logic to a new parent component
  render () {
    let items = []
    if (this.props.isSearchActive === true) {
      if (this.props.records) {
        if (this.props.records.length > 0) {
          items = this.props.records.map(record => {
            const authors = record['artist-credit'][0].name
            return <ListItem key={record.id}
              id={record.id}
              title={record.title}
              fav={this.checkIfFaivorite(record.id)}
              toggle={this.toggleFaivotite.bind(this)}
              authors={authors} />
          })

          const totalPages = Math.floor(this.props.count / PER_PAGE)
          const currentPage = Math.floor(this.props.offset / PER_PAGE)

          return (
            <>
              <ListArea>
                {items}
              </ListArea>
              {(totalPages > 1) && (this.props.isSearchActive)
                ? <Paginator pageCount={totalPages}
                  initialPage={currentPage}
                  pageRangeDisplayed={3}
                  onPageChange={this.gotoPage}
                  disableInitialCallback
                  marginPagesDisplayed={1}
                  previousLabel={'<'}
                  nextLabel={'>'} />
                : null}
            </>
          )
        } else {
          return <BlankResponse />
        }
      } else {
        return null
      }
    } else {
      items = this.props.bookmarks.map(record => {
        return <ListItem key={record.id}
          id={record.id}
          title={record.title}
          fav
          toggle={this.toggleFaivotite.bind(this)}
          authors={record.authors} />
      })
      return (
        <ListArea>
          {items}
        </ListArea>
      )
    }
  }
}

// Getting typed text here in order to pass to paginator
const mapStateToProps = state => {
  return {
    text: state.app.searchText,
    isSearchActive: state.app.isSearchActive,
    bookmarks: state.bookmarks.bookmarks
  }
}
const mapDispatchToProps = dispatch => {
  return {
    queryText: (text, offset) => dispatch(queryText(text, offset)),
    updateBookmarks: array => dispatch(updateBookmarks(array)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
