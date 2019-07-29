import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import { setText, setSearchVisibility } from '../../actions/appActions'
import { connect } from 'react-redux';

const Side = styled.aside`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 1rem;
  min-height: 30vh;
  border-radius: 10px;
`

class Sidebar extends React.Component {

  constructor() {
    super()
  }
  render() {
    return (
      <Side>
        <Search type="text" 
                onChange={(event) => this.props.setText(event.target.value)} 
                value={this.props.text}
                placeholder="Find an album"/>
        <a onClick={() => this.props.setSearchVisibility(true)}>Search</a>
        <a onClick={() => this.props.setSearchVisibility(false)}>Bookmarks</a>
      </Side>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    text: state.app.searchText
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setText: text => dispatch(setText(text)),
    setSearchVisibility: value => dispatch(setSearchVisibility(value)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
