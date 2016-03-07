import React, { Component, PropTypes } from 'react'

export default class Toggle extends Component {
  static get displayName () {
    return 'Toggle'
  }

  static propTypes () {
    return {
      label: PropTypes.string.isRequired,
      ontoggle: PropTypes.func
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    const {ontoggle} = this.props
    if (ontoggle && ontoggle instanceof Function) {
      ontoggle()
    }

    this.setState({
      isActive: !this.state.isActive
    })
  }

  render () {
    const styles = {
      maxWidth: 200,
      height: 200,
      textAlign: 'center',
      border: '1px solid black',
      borderRadius: '4px'
    }

    return (
      <div style={styles} onClick={this.toggle}>{this.props.label}</div>
    )
  }
}
