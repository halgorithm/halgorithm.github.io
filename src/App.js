import React, { Component } from 'react'
import { GameCard } from './GameCard'
import logo from './logo.svg'
import './App.css'

const games = {
  exampleGame: {
    id: 'exampleGame',
    title: 'Example Game',
    description: "An example game I made because I'm great",
    image: 'http://hdwpro.com/wp-content/uploads/2017/01/3D-Cool-Image.jpg',
    extraImages: ['banana2.jpg', 'banana3.jpg']
  },
  exampleGame2: {
    id: 'exampleGame2',
    title: 'Example Game 2',
    description: "Another example game I made because I'm great",
    image: 'https://i.ytimg.com/vi/ReF6iQ7M5_A/maxresdefault.jpg',
    extraImages: ['apple2.jpg', 'apple3.jpg']
  }
}

class App extends Component {
  render() {
    const gameEls = Object.values(games).map(
      ({ title, description, image, extraImages }) => (
        <li key={title}>
          <GameCard
            title={title}
            description={description}
            image={image}
            extraImages={extraImages}
          />
        </li>
      )
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My games</h1>
        </header>
        <ul id="games">{gameEls}</ul>
      </div>
    )
  }
}

export default App
