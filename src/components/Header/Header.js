import { Component } from 'preact'
import { Link } from 'preact-router'
import { connect } from 'mobx-preact'
import BackArrow from 'react-icons/lib/md/arrow-back'

import style from './style'

@connect(['routing'])
export default class Header extends Component {
  render ({ routing: { location: { pathname } } }) {
    return (
      <div class={style.container}>
        { pathname !== '/' ? <Link class={style.back} href='/'><BackArrow /></Link> : null }
        <Link class={style.logo} href='/'><img src='https://seeklogo.com/images/P/preact-logo-64E4BF9ABC-seeklogo.com.png' /> Blog For Days</Link>
      </div>
    )
  }
}
