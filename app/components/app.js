import React, { Component, PropTypes } from 'react'
import MainNav from 'components/MainNav'

import DomComponents from 'components/DomComponents'
const { Div, Section } = DomComponents

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
        <MainNav />
        <Section className='app-content'>
          <Div className='row'>
            <Div className='col-md-12'>{this.props.children}</Div>
          </Div>
        </Section>
      </Div>
    )
  }
}
