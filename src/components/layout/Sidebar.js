import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import { setText, setSearchVisibility } from '../../actions/appActions'
import { queryText, clearSearch } from '../../actions/apiActions'
import { connect } from 'react-redux'
import { debounce } from 'underscore'

const Side = styled.aside`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 1rem;
  min-height: 30vh;
  border-radius: 10px;
`

const Link = styled.a`
  background-color: ${props => props.active ? "red" : ""};
  cursor: pointer;
`

class Sidebar extends React.Component {

  constructor() {
    super()
    this.handleSearch = this.handleSearch.bind(this)
    // Making user input more robust and reducing the amount of requests
    this.queueSearch = debounce(this.queueSearch.bind(this), 900);
  }

  handleSearch(text) {
    this.props.setText(text)
    this.queueSearch(text)
  }

  queueSearch(text) {
    if (text.length === 0) {
      this.props.clearSearch()
    } else {
      this.props.queryText(text)
    }
  }

  render() {
    return (
      <Side>
        <Search type="text" 
                onChange={(event) => this.handleSearch(event.target.value)} 
                value={this.props.text}
                placeholder="Find an album"/>
        <Link active={this.props.search} 
              onClick={() => this.props.setSearchVisibility(true)}>
              Search
        </Link>
        <Link active={!this.props.search} 
              onClick={() => this.props.setSearchVisibility(false)}>
              Bookmarks
        </Link>
      </Side>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    text: state.app.searchText,
    search: state.app.isSearchActive,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setText: text => dispatch(setText(text)),
    setSearchVisibility: value => dispatch(setSearchVisibility(value)),
    queryText: text => dispatch(queryText(text)),
    clearSearch: () => dispatch(clearSearch()),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
