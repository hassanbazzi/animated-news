import { Component } from 'preact'
import { connect } from 'mobx-preact'
import StoryPreview from 'components/StoryPreview'

import style from './style'

@connect(['stories'])
export default class Home extends Component {
  render ({ stories }) {
    const data = stories.list.entries()
    return (
      <div class={style.container}>
        {data.map(([url, story]) => (
          <StoryPreview story={story} />
        ))}
      </div>
    )
  }
}
