import React from 'react'
import Layout from './components/Layout'
import List from './components/List'
import Loader from './components/Loader'
import Error from './components/layout/Error'
import { updateBookmarks } from './actions/bookmarkActions'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (localStorage.getItem("bookmarks") !== null) {
      const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks"))
      this.props.updateBookmarks(storedBookmarks)
    }
  }

  render() {
    return (
      <Layout>
        <Error>
          {this.props.error}
        </Error>
        {
          this.props.fetching ? 
          <Loader/>
          :
          <List records={this.props.releases}
                count={this.props.count}
                offset={this.props.offset}/>
        }
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.app.isSearchActive,
    releases: state.api.releases,
    count: state.api.count,
    offset: state.api.offset,
    error: state.api.error,
    fetching: state.api.fetching,
    fetched: state.api.fetched,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBookmarks: array => dispatch(updateBookmarks(array)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
