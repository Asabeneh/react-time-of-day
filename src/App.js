import React, { Component } from 'react'
import './assets/styles/styles.scss'
import './App.css'
import sunrise from './assets/images/sun_rise.png'
import sunset from './assets/images/sunset.jpg'
import afternoon from './assets/images/afternoon.jpg'
import { showDateTime } from './utils/show_date_time'

const images = [
  { time: 'morning', image: sunrise },
  { time: 'Afternoon', image: afternoon },
  { time: 'Evening', image: sunset }
]

const styles = {
  color: '#FF8C00',
  backgroundImage: `url(${sunrise})`,
  backgroundSize: 'cover'
}

const date = new Date()

const hours = date.getHours()
let timeOfDay
if (hours < 12) {
  timeOfDay = 'Morning'
  styles.color = '#04756F'
  styles.color = 'white'
  styles.backgroundImage = `url(${images[0].image})`
} else if (hours >= 12 && hours < 15) {
  timeOfDay = 'Afternoon'
  styles.color = ''
  styles.backgroundImage = `url(${images[1].image})`
} else if (hours >= 15 && hours < 23) {
  timeOfDay = 'Evening'
  styles.color = 'black'
  styles.backgroundImage = `url(${images[2].image})`
} else {
  timeOfDay = 'Night'
  styles.color = 'black'
  styles.backgroundImage = `url(${images[2].image})`
}

class App extends Component {
  state = {
    users: ['Asabeneh', 'Eyob', 'John', 'Desalegn', 'Lidiya'],
    currentUser: 'Asabeneh',
    time: showDateTime()
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
    const index = Math.floor(Math.random() * this.state.users.length)
    this.setState({ currentUser: this.state.users[index] })
  }
  tick() {
    let time = showDateTime()
    this.setState(state => ({
      time: time
    }))
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div className='App' style={styles}>
        <h1>
          {this.state.time} <br />
          {timeOfDay} {this.state.currentUser}
        </h1>
      </div>
    )
  }
}

export default App
