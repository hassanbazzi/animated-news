import { Component, h, cloneElement } from 'preact'

export default class SwipeRecognizer extends Component {
  constructor () {
    super()
    this.tolerance = 50
    this.gesture = { x: [], y: [], match: '' }
  }

  componentDidMount () {
    this.base.addEventListener('touchstart', this.capture)
    this.base.addEventListener('touchmove', this.capture)
    this.base.addEventListener('touchend', this.compute)
  }

  componentWillUnmount () {
    this.base.removeEventListener('touchstart', this.capture)
    this.base.removeEventListener('touchmove', this.capture)
    this.base.removeEventListener('touchend', this.compute)
  }

  capture = (event) => {
    event.preventDefault()
    this.gesture.x.push(event.touches[0].clientX)
    this.gesture.y.push(event.touches[0].clientY)
  }

  compute = (event) => {
    const xStart = this.gesture.x[0]
    const yStart = this.gesture.y[0]
    const xEnd = this.gesture.x.pop()
    const yEnd = this.gesture.y.pop()
    const xTravel = xEnd - xStart
    const yTravel = yEnd - yStart
    const absXTravel = Math.abs(xTravel)
    const absYTravel = Math.abs(yTravel)

    if (absXTravel < this.tolerance && absYTravel >= this.tolerance) {
      if (yTravel < 0) {
        this.gesture.match = 'up'
      } else {
        this.gesture.match = 'down'
      }
    }

    if (absYTravel < this.tolerance && absXTravel >= this.tolerance) {
      if (xTravel < 0) {
        this.gesture.match = 'left'
      } else {
        this.gesture.match = 'right'
      }
    }

    if (this.gesture.match !== '') {
      this.onSwipe(this.gesture.match)
    }

    this.gesture.x = []
    this.gesture.y = []
    this.gesture.match = ''
  };

  onSwipe = (direction) => {
    if (this.props.onSwipe) {
      this.props.onSwipe(direction)
    }
    this.setState({ swipe: direction })
  };

  render ({ children }, state) {
    return cloneElement(children[0], state)
  }
}
