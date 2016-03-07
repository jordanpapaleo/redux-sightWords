import React, { Component, PropTypes } from 'react'
import Toggle from 'components/Toggle'

export default class ToggleSet extends Component {
  static get displayName () {
    return 'ToggleSet'
  }

  static propTypes () {
    return {
      set: PropTypes.object,
      ontoggle: PropTypes.func
    }
  }

  constructor (props) {
    super(props)

    this.toggleSet = this.toggleSet.bind(this)
  }

  toggleSet () {
    const {ontoggle, set} = this.props
    if (ontoggle && ontoggle instanceof Function) {
      ontoggle(set)
    }
  }

  render () {
    const {set} = this.props

    return (
      <Toggle label={set.label} ontoggle={this.toggleSet} />
    )
  }
}
