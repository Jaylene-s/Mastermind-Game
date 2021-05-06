import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

class Home extends Component {
    routeEasy=()=> {
      window.location.href="/easy";
    }
    routeMedium=()=> {
      window.location.href="/medium";
    }
    routeHard=()=> {
      window.location.href="/hard";
    }

  render () {
    return (
      <div> 
        <div style={{
            borderRadius: '20', 
            padding: 'theme.spacing(10, 10, 10)',
            color: "#EDFF86",
            position: 'absolute',
            width: '350px',
            height: '400px',
            top: '30%',
            left: '50%',
            margin: '-100px 0 0 -150px',
            fontWeight: 'bold'
          }}>

          <h1 style={{fontSize: '46px', textAlign: 'center'}}>Mastermind Game</h1>
          <div textAlign='center'>
            <h2 style={{fontSize: '24px'}}>Instructions: </h2>
            <p>When you click on a diffculty level button the computer will randomly select a pattern of 4-8 numbers. You have several attempts to guess the combination. 
              After each attempt the computer will let you know if any number was guessed correctly or if the location of a number was guessed correctly.
            </p>

            <button style={{
              backgroundColor: '#EDFF86',
              position: 'center', 
              marginTop: '15px', 
              marginLeft: '10px', 
              width: '100px', 
              height: '50px',
              borderRadius: '10px',
              borderColor: '#333333'
              }} onClick={this.routeEasy}>
              Easy 
            </button>
            <button style={{
              backgroundColor: '#EDFF86',
              position: 'center', 
              marginTop: '15px', 
              marginLeft: '10px', 
              width: '100px', 
              height: '50px',
              borderRadius: '10px',
              borderColor: '#333333'
              }} onClick={this.routeMedium}>
              Medium 
            </button>
            <button style={{
              backgroundColor: '#EDFF86',
              position: 'center', 
              marginTop: '15px', 
              marginLeft: '10px', 
              width: '100px', 
              height: '50px',
              borderRadius: '10px',
              borderColor: '#333333'
              }} onClick={this.routeHard}>
              Hard 
            </button>
          </div>
        </div>
          <ParticlesBg type="thick" bg={true} />
      </div>
    )
  }
}

export default Home;