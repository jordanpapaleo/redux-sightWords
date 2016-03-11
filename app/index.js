import 'libs/bootstrap-4.0-flex.css'
import 'styles/main.scss'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import multi from 'redux-multi'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import ReduxPromise from 'redux-promise'

import reducers from 'reducers'
import routes from 'Routes'

import DomComponents from 'components/DomComponents'
const { Div } = DomComponents

import { getWords } from 'actions/wordsActions'

// Apply the middleware to the store
const log = debug('application:bootstrap')
const middleware = [ReduxPromise, multi, routerMiddleware(browserHistory)]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStoreWithMiddleware(reducers, DevTools.instrument())
const history = syncHistoryWithStore(browserHistory, store)
store.dispatch(getWords())

log('creating application node')
const domNode = document.createElement('div')
domNode.id = 'application'

log('adding application node to body')
document.body.appendChild(domNode)

const router = (
  <Provider store={store}>
    <Div>
      <Router history={history} routes={routes} />
      <DevTools />
    </Div>
  </Provider>
)

render(router, domNode, () => {
  log('finished mounting application')
})
