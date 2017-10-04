import { Component } from 'preact'
import { connect } from 'mobx-preact'
import StoryList from 'components/StoryList'
import LoadingIndicator from 'components/LoadingIndicator'

@connect(['stories'])
export default class Home extends Component {
  componentDidMount () {
    if (this.props.shortUrl) {
      this.props.stories.setActiveStory(this.props.shortUrl)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.shortUrl !== this.props.shortUrl) {
      this.props.stories.setActiveStory(this.props.shortUrl)
    }
  }

  render ({stories: { list }}) {
    if (list && list.size) {
      return <StoryList />
    } else {
      return <LoadingIndicator />
    }
  }
}
