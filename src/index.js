import { Provider } from 'mobx-preact'

import App from './components/app'
import store from 'store'

import './style'

export default () => (
  <Provider {...store}>
    <App />
  </Provider>
)
