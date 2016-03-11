import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  static get displayName () {
    return 'Nav'
  }

  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Sight Words</Link></li>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/words'>Words</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
      </div>
    )
  }
}
