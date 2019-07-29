import React from 'react'
import Layout from './components/Layout'
import List from './components/layout/List'
import Loader from './components/Loader'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    search: state.app.isSearchActive,
    bookmarks: state.bookmarks.bookmarks,
    releases: state.api.releases,
    count: state.api.count,
    offset: state.api.offset,
    error: state.api.error,
    fetching: state.api.fetching,
    fetched: state.api.fetched,
  }
}

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
      <Layout>
        {
          this.props.fetching ? 
          <Loader/>
          :
          <List records={this.props.records}/>
        }
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(App)
