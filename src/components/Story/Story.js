import { Component } from 'preact'
import { Link } from 'preact-router'
import Markup from 'preact-markup'
import CloseIcon from 'react-icons/lib/md/close'

import style from './style'

export default class Story extends Component {
  render ({ story: { title, content, createdSince } }) {
    return (
      <div class={style.container}>
        <h2 class={style.title}>{title}</h2>
        <p class={style.date}>{createdSince}</p>
        <Markup class={style.content} markup={content} />
        <Link class={style.close} href='/'><CloseIcon /></Link>
      </div>
    )
  }
}
