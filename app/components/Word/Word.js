import React, { Component, PropTypes } from 'react'
import SpeakService from 'utils/SpeakService'

export default class Word extends Component {
  static get displayName () {
    return 'Word'
  }

  static get propTypes () {
    return {
      value: PropTypes.string
    }
  }

  constructor (props) {
    super(props)
    this.say = this.say.bind(this)
  }

  say () {
    SpeakService.say(this.props.value)
  }

  render () {
    const size = '150px'

    return (
      <div className='text-center' style={{lineHeight: size, fontSize: size}} onClick={this.say}>{this.props.value}</div>
    )
  }
}
