import React from 'react'
import { Route } from 'react-router'

import Settings from 'containers/Settings'

import App from 'components/App'
import Words from 'components/Words'

console.info('Words', Words)

export default (
  <Route path='/' component={App}>
    <Route path='words' component={Words} />
    <Route path='settings' component={Settings} />
  </Route>
)
