import { Component } from 'preact'
import { connect } from 'mobx-preact'
import classNames from 'obj-str'
import root from 'window-or-global'
import SwipeRecognizer from 'components/SwipeRecognizer'
import StoryPagination from 'components/StoryPagination'

import Story from 'components/Story'

import style from './style'

@connect(['stories', 'routing'])
export default class StoryViewer extends Component {
  componentDidMount () {
    root.document.addEventListener('keydown', this.onKeyDown, false)
  }

  handleClose = () => {
    this.props.routing.push('/')
  }

  handleSwipe = (direction) => {
    let nextActive
    switch (direction) {
      case 'right':
        nextActive = this.props.stories.getPreviousStory()
        break
      case 'left':
        nextActive = this.props.stories.getNextStory()
        break
      case 'down':
        this.handleClose()
        break
    }

    if (nextActive) {
      this.props.stories.setActiveStory(nextActive)
    }
  }

  onKeyDown = (e) => {
    if (!this.props.stories.viewerOpen) {
      return
    }
    e = e || root.event
    let nextActive = null
    switch (e.keyCode) {
      case 37: // Up || Left
        nextActive = this.props.stories.getPreviousStory()
        break
      case 39: // Down || Right
        nextActive = this.props.stories.getNextStory()
        break
      case 27:
        this.handleClose()
        break
    }

    if (nextActive) {
      this.props.stories.setActiveStory(nextActive)
    }
  }

  render ({ stories: { activeStory, viewerOpen, list } }) {
    const story = list.has(activeStory) ? list.get(activeStory) : null
    return (
      <div class={classNames({
        [style.container]: true,
        [style.active]: viewerOpen
      })}
      >
        { story
        ? <div>
          <SwipeRecognizer onSwipe={this.handleSwipe}>
            <Story story={story} />
          </SwipeRecognizer>
          <StoryPagination />
        </div>
        : null
        }
      </div>
    )
  }
}
