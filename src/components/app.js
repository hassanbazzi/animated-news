import { Component } from 'preact'
import { Router } from 'preact-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'mobx-react-router'
import stores from 'store'

import Stories from 'routes/stories'
import Header from 'components/Header'
import StoryViewer from 'components/StoryViewer'

const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, stores.routing)

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <Header />
        <Router history={history}>
          <Stories path='/' />
          <Stories path='/story/:shortUrl' />
        </Router>
        <StoryViewer />
      </div>
    )
  }
}
