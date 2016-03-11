import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Word from 'components/Word'

class WordsPage extends Component {
  static get displayName () {
    return 'WordsPage'
  }

  static propTypes () {
    return {
      mergedWords: PropTypes.array
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
  }

  previous () {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  next () {
    if (this.state.index < this.props.mergedWords.length) {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  render () {
    const {mergedWords} = this.props
    if (!mergedWords) {
      return <div>Pick your words</div>
    }

    return (
      <div className='row'>
        <button className='col-md-1' onClick={this.previous}>Prev</button>
        <div className='col-md-10'>
          {mergedWords.map((word, i) => {
            if (i === this.state.index) {
              return <Word value={word} />
            }
          })}
        </div>
        <button className='col-md-1' onClick={this.next}>Next</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.info('MSTP', state)
  return {
    mergedWords: state.wordStore.mergedWords
  }
}

export default connect(mapStateToProps)(WordsPage)
