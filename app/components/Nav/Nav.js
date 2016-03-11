import React, { Component } from 'react'
import { Link } from 'react-router'

import DomNodes from 'components/DomComponents'
const { Div, Ul, Li } = DomNodes

export default class Nav extends Component {
  static get displayName () {
    return 'Nav'
  }

  render () {
    return (
      <Div>
        <Ul>
          <Li><Link to='/'>Sight Words</Link></Li>
          <Li><Link to='/home'>Home</Link></Li>
          <Li><Link to='/words'>Words</Link></Li>
          <Li><Link to='/settings'>Settings</Link></Li>
        </Ul>
      </Div>
    )
  }
}
