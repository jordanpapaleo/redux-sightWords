import React, { Component, PropTypes } from 'react'

const DefaultStyles = {
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  p: {},
  a: {},
  button: {
    backgroundColor: 'red'
  },
  strong: {},
  em: {},
  ul: {},
  li: {},
  span: {},
  div: {},
  article: {},
  section: {}
}

const DomNodes = {}

const domNodes = ['h1', 'h2', 'h3', 'h4', 'a', 'button', 'p', 'strong', 'em', 'ul', 'li', 'span', 'div', 'article', 'section']

domNodes.forEach((node) => {
  const className = node.charAt(0).toUpperCase() + node.slice(1)

  DomNodes[className] = class className extends Component {
    static get propTypes () {
      return { children: PropTypes.node }
    }

    render () {
      const defaultStyle = DefaultStyles[node]
      const nodeStyle = Object.assign({}, defaultStyle, this.props.style)
      const mergedProps = {
        ...this.props,
        style: nodeStyle
      }

      return React.createElement(node, mergedProps, this.props.children)
    }
  }
})

export default DomNodes
