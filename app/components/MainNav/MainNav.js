import React, { Component } from 'react'
import { Link } from 'react-router'

import DomComponents, { defaultStyles } from 'components/DomComponents'
const { Nav, Ul, Li } = DomComponents
const { HORIZONTAL_SPACING } = defaultStyles

console.info('defaultStyles', defaultStyles)

export default class MainNav extends Component {
  static get displayName () {
    return 'Nav'
  }

  render () {
    const ulStyle = {
      display: 'flex',
      listStyleType: 'none',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start'
    }

    const liStyle = {
      marginLeft: 12, // HORIZONTAL_SPACING * 2,
      marginRight: 12 // HORIZONTAL_SPACING * 2
    }

    return (
      <Nav>
        <Ul style={ulStyle}>
          <Li style={liStyle}><Link to='/'>Sight Words</Link></Li>
          <Li style={liStyle}><Link to='/home'>Home</Link></Li>
          <Li style={liStyle}><Link to='/words'>Words</Link></Li>
          <Li style={liStyle}><Link to='/settings'>Settings</Link></Li>
        </Ul>
      </Nav>
    )
  }
}
