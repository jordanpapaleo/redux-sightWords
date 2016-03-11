import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
import ToggleSet from 'components/ToggleSet'
import { setActive, mergeSets } from 'actions/wordsActions'

import DomNodes from 'components/DomComponents'
const { Div, Ul, Li, Button } = DomNodes

export default class HomePage extends Component {
  static get displayName () {
    return 'HomePage'
  }

  static propTypes () {
    return {
      sets: PropTypes.array,
      setActive: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      activeSets: PropTypes.array
    }
  }

  constructor (props) {
    super(props)
    this.toggleSet = this.toggleSet.bind(this)
    this.start = this.start.bind(this)
  }

  toggleSet (set) {
    this.props.dispatch(setActive(set))
  }

  start () {
    if (this.props.activeSets) {
      this.props.dispatch(mergeSets(this.props.activeSets))
      this.props.dispatch(push('words'))
    }
  }

  render () {
    const {sets} = this.props
    return (
      <Div>
        <Ul className='row' style={{ listStyleType: 'none', padding: 0, alignContent: 'center' }}>
          {sets.map((set, i) => {
            return <Li className='col-md-3' key={i}><ToggleSet set={set} ontoggle={this.toggleSet} /></Li>
          })}
        </Ul>
        <Button className='btn btn-default' style={{ color: 'white' }} onClick={this.start}>Start</Button>
      </Div>
    )
  }
}

/*
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setActive }, dispatch)
}*/

function mapStateToProps (state) {
  // console.info('MSTP', state)
  return {
    sets: state.wordStore.sets,
    activeSets: state.wordStore.activeSets
  }
}

export default connect(mapStateToProps)(HomePage)
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
