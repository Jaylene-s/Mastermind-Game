import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

class Home extends Component {
    routeChange=()=> {
        console.log("clicked")
        window.location.href="/game";
    }

  render () {
    return (
      <div> 
          <div style={{
                backgroundColor: 'fade("#FFD6AD", 0.8)', 
                borderRadius: '20', 
                padding: 'theme.spacing(10, 10, 10)',
                color: "#FFE0C2",
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
            <p>When you click on the Start Game button the computer will randomly select a pattern of four different numbers. You have 10 attempts to guess the combination. 
                After each attempt the computer will let you know if any number was guessed correctly or if the location of a number was guessed correctly. </p>

              <button style={{
                  backgroundColor: '#FFBF70',
                  position: 'center', 
                  marginTop: '15px', 
                  marginLeft: '100px', 
                  width: '100px', 
                  height: '50px',
                  borderRadius: '10px',
                  borderColor: '#333333'
                }} onClick={this.routeChange}>

                    Start Game
              </button>
          </div>
          </div>
      <ParticlesBg type="thick" bg={true} />
      </div>
    )
  }
}

export default Home;