import 'libs/bootstrap-4.0-flex.css'
import 'styles/main.scss'

import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import ReduxPromise from 'redux-promise'
import reducers from 'reducers'
import routes from 'Routes'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const log = debug('application:bootstrap')

log('creating application node')
const domNode = document.createElement('div')
domNode.id = 'application'

log('adding application node to body')
document.body.appendChild(domNode)

const store = createStoreWithMiddleware(reducers)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
)

render(router, domNode, () => {
  log('finished mounting application')
})
