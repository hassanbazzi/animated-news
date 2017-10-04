import { action, observable } from 'mobx'
import { database } from 'store/firebase'
import timeago from 'timeago.js'
import stores from 'store'

class Stories {
  constructor () {
    const storiesRef = database.ref('/stories')
    storiesRef.on('value', snapshot => {
      this.updateList(snapshot.val())
    })
  }

  @observable isFetching
  @observable list = new Map()
  @observable activeStory = null
  @observable viewerOpen = false

  @action.bound
  updateList (list) {
    list.forEach(story => this.list.set(story.url, new Story(story)))
    this.activeKeys = this.list.keys()
  }

  @action.bound
  setActiveStory (url) {
    if (url) {
      this.activeStory = url
      this.viewerOpen = true
      if (stores.routing.location.pathname !== `/story/${url}`) {
        stores.routing.push(`/story/${url}`)
      }
    } else {
      this.viewerOpen = false
    }
  }

  getNextStory () {
    const currentIndex = this.activeKeys.indexOf(this.activeStory)

    if (currentIndex === this.activeKeys.length - 1) {
      return this.activeKeys[0]
    } else {
      return this.activeKeys[currentIndex + 1]
    }
  }

  getPreviousStory () {
    const currentIndex = this.activeKeys.indexOf(this.activeStory)

    if (currentIndex === 0) {
      return this.activeKeys[this.activeKeys.length - 1]
    } else {
      return this.activeKeys[currentIndex - 1]
    }
  }
}

class Story {
  constructor (story) {
    Object.assign(this, story)
    const { content, createdAt } = story
    this.clippedContent = `${content.split(' ').slice(0, 10).join(' ')}&#8230;`
    const date = new Date(createdAt * 1000)
    const timeagoInstance = timeago()
    this.createdSince = timeagoInstance.format(date)
  }
}

const singleton = new Stories()
export default singleton
