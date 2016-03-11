import React, { Component, PropTypes } from 'react'
import Nav from 'components/Nav'

import DomNodes from 'components/DomComponents'
const { Div, Section } = DomNodes

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
      <Div className='container-fluid app-wrapper'>
        <Nav />
        <Section className='app-content'>
          <Div className='row'>
            <Div className='col-md-12'>{this.props.children}</Div>
          </Div>
        </Section>
      </Div>
    )
  }
}
