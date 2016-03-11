import React, { Component, PropTypes } from 'react'
import defaultStyles from './defaultStyles.js'
export { defaultStyles }

const DomComponents = {}

const htmlTags = ['h1', 'h2', 'h3', 'h4', 'a', 'button', 'p', 'strong', 'em', 'ul', 'li', 'span', 'div', 'nav', 'article', 'section', 'dl', 'dt', 'dd', 'table', 'thead', 'tbody', 'tr', 'td', 'th']

htmlTags.forEach((node) => {
  const className = node.charAt(0).toUpperCase() + node.slice(1)

  DomComponents[className] = class className extends Component {
    static get displayName () {
      return 'DomComponents/' + className // The ES6 string was failing here for some reason...
    }

    static get propTypes () {
      return { children: PropTypes.node }
    }

    render () {
      const defaultStyle = defaultStyles[node]
      const nodeStyle = Object.assign({}, defaultStyle, this.props.style)
      const mergedProps = Object.assign({}, this.props, {
        style: nodeStyle
      })

      return React.createElement(node, mergedProps, this.props.children)
    }
  }
})

export default DomComponents
