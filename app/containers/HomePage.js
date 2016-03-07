import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToggleSet from 'components/ToggleSet'
import { setActive } from 'actions/wordsActions'

export default class HomePage extends Component {
  static get displayName () {
    return 'HomePage'
  }

  static propTypes () {
    return {
      sets: PropTypes.array,
      setActive: PropTypes.func.isRequired
    }
  }

  constructor (props) {
    super(props)

    this.toggleSet = this.toggleSet.bind(this)
  }

  toggleSet (set) {
    this.props.setActive(set)
  }

  render () {
    const {sets} = this.props
    return (
      <ul className='row' style={{ listStyleType: 'none', padding: 0, alignContent: 'center' }}>
        {sets.map((set, i) => {
          return <li className='col-md-3' key={i}><ToggleSet set={set} ontoggle={this.toggleSet} /></li>
        })}
      </ul>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setActive }, dispatch)
}

function mapStateToProps (state) {
  return {
    sets: state.wordStore.sets
  }
}

export default connect(mapStateToProps)(HomePage)
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
