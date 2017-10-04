import { Component } from 'preact'
import { Link } from 'preact-router'
import { connect } from 'mobx-preact'
import Circle from 'react-icons/lib/md/brightness-1'

import style from './style'

@connect(['stories'])
export default class Story extends Component {
  render ({ stories: { activeKeys, activeStory} }) {
    return (
      <div class={style.container} >
        <ul>
          { activeKeys.map(key => (
            <li><Link href={`/story/${key}`} title='Visit article' ><Circle class={activeStory === key ? style.active : style.inactive} /></Link></li>
          ))}
        </ul>
      </div>
    )
  }
}
