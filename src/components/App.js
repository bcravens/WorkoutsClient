import React from 'react'
import NavBar from './NavBar'
import FlashMessagesList from './flash/FlashMessagesList'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    )
  }
}

export default App
