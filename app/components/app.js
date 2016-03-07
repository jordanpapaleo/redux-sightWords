import React, { Component, PropTypes } from 'react'
import Nav from 'components/Nav'

export default class App extends Component {
  static get displayName () {
    return 'App'
  }

  static get propTypes () {
    return {
      children: PropTypes.object
    }
  }

  render () {
    return (
      <div className='container-fluid app-wrapper'>
        <Nav />
        <section className='app-content'>
          <div className='row'>
            <div className='col-md-12'>{this.props.children}</div>
          </div>
        </section>
      </div>
    )
  }
}
