import React from 'react'
import { Route } from 'react-router'

import Settings from 'containers/Settings'

import App from 'components/App'
import WordsPage from 'containers/WordsPage'
import HomePage from 'containers/HomePage'

export default (
  <Route path='/' component={App}>
    <Route path='home' component={HomePage} />
    <Route path='words' component={WordsPage} />
    <Route path='settings' component={Settings} />
  </Route>
)
