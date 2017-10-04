import { Component } from 'preact'
import { Link } from 'preact-router'
import Markup from 'preact-markup'

import style from './style'

export default class Story extends Component {
  render ({ story: { url, title, createdSince, clippedContent } }) {
    return (
      <div class={style.container}>
        <h2 class={style.title}><Link href={`/story/${url}`} title='Visit article' >{title}</Link></h2>
        <p class={style.date}>{createdSince}</p>
        <Markup class={style.content} markup={clippedContent} />
      </div>
    )
  }
}
