import { RouterStore } from 'mobx-react-router'
import stories from './stories'
import firebase from './firebase'

const routing = new RouterStore()

export default {
  stories,
  firebase,
  routing
}
