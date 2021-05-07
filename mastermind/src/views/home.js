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

            <p style={{textAlign: 'center'}}><a href="https://github.com/Jaylene-s/Mastermind-Game/tree/master/mastermind">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjgzLjMwOTgxIiB5MT0iNDMiIHgyPSI4My4zMDk4MSIgeTI9IjE0OC43MzE2MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4YWI0ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNDkyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxMy40Mzc1IiB4Mj0iODYiIHkyPSIxNTkuMDExMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWE2ZGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgyMmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNNjcuMjA5LDE1MC41MTg4MWMtMC4wMDgwNiwtMC45ODkgLTAuMDE2MTMsLTUuMjcyODcgLTAuMDI0MTksLTkuMjgyNjJsLTAuMDA4MDYsLTQuMTY1NjNjLTE4LjA4NDE5LDIuNDU5MDYgLTIyLjQ2MjEyLC0xMC4xNTg3NSAtMjIuNTEwNSwtMTAuMjkzMTJjLTIuNTEwMTIsLTYuMzY0IC01Ljk0MjA2LC04LjE4MzQ0IC02LjA4OTg3LC04LjI1ODY5bC0wLjMzMzI1LC0wLjE5MzVjLTEuMjQ0MzEsLTAuODQ5MjUgLTQuNTQ0NTYsLTMuMTA5NDQgLTMuNjA2NjMsLTYuMDgxODFjMC44NDY1NiwtMi42Nzk0NCA0LjEyOCwtMi45NTYyNSA1LjYxOTU2LC0yLjkwNzg4YzguMjYxMzgsMC41Nzc4MSAxMi40NDMxMiw4LjAwMzM4IDEyLjYxNTEyLDguMzE3ODFjNC4yMTY2OSw3LjIyNjY5IDEwLjY1MzI1LDYuNDc5NTYgMTQuODA1NDQsNC45NTU3NWMwLjM4NywtMS44NDkgMC45ODYzMSwtMy41NDc1IDEuNzcxMDYsLTUuMDQ3MTNjLTEzLjMxOTI1LC0yLjM2MjMxIC0yOC40MDk1NiwtOS40NDY1NiAtMjguNDA5NTYsLTM1LjIxN2MwLC03LjA3NjE5IDIuMjAzNzUsLTEzLjMzIDYuNTYwMTksLTE4LjYyMTY5Yy0wLjk3Mjg3LC0zLjI0MTEzIC0yLjA4MDEzLC05Ljg1MjM4IDEuMTk4NjIsLTE4LjE4MDk0bDAuNDY3NjIsLTEuMTg3ODdsMS4yMTQ3NSwtMC4zODdjMS4xMTgsLTAuMzY4MTkgNy4yMjQsLTEuNjc3IDE5Ljc3NzMxLDYuNTM4NjljNS4xODE1LC0xLjMyNzYyIDEwLjY2NjY5LC0yLjAxMjk0IDE2LjMyMzg3LC0yLjAzOTgxYzUuNjg0MDYsMC4wMjY4OCAxMS4xNzQ2MywwLjcxMjE5IDE2LjM2Njg3LDIuMDM5ODFjMTIuNTQyNTYsLTguMjE4MzcgMTguNjM1MTIsLTYuODkzNDQgMTkuNzU1ODEsLTYuNTM4NjlsMS4yMTIwNiwwLjM4OTY5bDAuNDY3NjIsMS4xODI1YzMuMjkyMTksOC4zMjU4NyAyLjE4NDk0LDE0LjkzOTgxIDEuMjEyMDYsMTguMTgzNjNjNC4zNDgzOCw1LjI3NTU2IDYuNTUyMTMsMTEuNTMyMDYgNi41NTIxMywxOC42MjE2OWMwLDI1Ljc3NTgxIC0xNS4xMDY0NCwzMi44Mzg1NiAtMjguNDU1MjUsMzUuMTcxMzFjMS41MTMwNiwyLjg2MjE5IDIuMzMyNzUsNi40NTUzOCAyLjMzMjc1LDEwLjQyMjEyYzAsNC41MjMwNiAtMC4wMTg4MSwxOS4zNjA3NSAtMC4wNDAzMSwyMi41ODAzOGwtNS4zNzUsLTAuMDM3NjNjMC4wMjE1LC0zLjIxNDI1IDAuMDQwMzEsLTE4LjAyNzc1IDAuMDQwMzEsLTIyLjU0NTQ0YzAsLTYuNTYyODggLTIuNTM0MzEsLTkuNDY1MzcgLTMuNjI4MTMsLTEwLjQxMTM4bC00LjY0OTM3LC00LjAyMzE5bDYuMTExMzcsLTAuNjc5OTRjMTMuOTg4NDQsLTEuNTUzMzggMjguMjg1OTQsLTYuMzkzNTYgMjguMjg1OTQsLTMwLjQ3ODk0YzAsLTYuMjYxODggLTIuMDg4MTksLTExLjcyMDE5IC02LjIwODEzLC0xNi4yMjE3NWwtMS4xNTU2MywtMS4yNjA0NGwwLjY1MDM3LC0xLjU3NzU2YzAuNDQ2MTIsLTEuMDc3NjkgMi40MDI2MiwtNi41NjI4NyAtMC4xMTU1NiwtMTQuMjE5NTZjLTIuMDM3MTMsMC4xMjA5NCAtNi45MDE1LDEuMDgwMzggLTE1LjAwNyw2LjU3NjMxbC0xLjAzMiwwLjY5NjA2bC0xLjE5NTk0LC0wLjMzMDU2Yy01LjAwNjgxLC0xLjM5MjEyIC0xMC41ODMzOCwtMi4xMzkyNSAtMTYuMTI3NjksLTIuMTY2MTNjLTUuNTE0NzUsMC4wMjY4OCAtMTEuMDgzMjUsMC43NzQgLTE2LjA4MiwyLjE2NjEzbC0xLjE5NTk0LDAuMzMwNTZsLTEuMDI5MzEsLTAuNjk2MDZjLTguMTEzNTYsLTUuNDkzMjUgLTEyLjk4ODY5LC02LjQ2MDc1IC0xNS4wMzM4OCwtNi41ODE2OWMtMi41MTI4MSw3LjY2MjA2IC0wLjU1MzYyLDEzLjE0NzI1IC0wLjEwNzUsMTQuMjI0OTRsMC42NTAzNywxLjU3NzU2bC0xLjE1Mjk0LDEuMjYwNDRjLTQuMTI4LDQuNTE3NjkgLTYuMjE4ODcsOS45NzYgLTYuMjE4ODcsMTYuMjIxNzVjMCwyNC4wNzQ2MiAxNC4yNzA2MiwyOC45NDQzOCAyOC4yMjk1LDMwLjUzMjY5bDYuMDUyMjUsMC42ODhsLTQuNTkwMjUsNC4wMDQzOGMtMC45OTk3NSwwLjg3MzQ0IC0yLjc2ODEyLDIuOTg4NSAtMy4zNzAxMyw3LjMyODgxbC0wLjIwMTU2LDEuNDc1NDRsLTEuMzU5ODgsMC42MTAwNmMtMy41NTAxOSwxLjU5MSAtMTUuNjkyMzEsNS44MTAzOCAtMjIuOTcyNzUsLTYuNjc4NDRjLTAuMDQwMzEsLTAuMDY3MTkgLTEuNDYyLC0yLjUzOTY5IC00LjAzNjYyLC00LjE4NDQ0YzEuNzM2MTMsMS43MTczMSAzLjg1MTE5LDQuNDk2MTkgNS41NTc3NSw4LjgzMzgxYzAuMTc3MzcsMC41MTA2MiAzLjY0Njk0LDkuNzM0MTIgMTkuNTY1LDYuMjg2MDZsMy4yNDExMiwtMC43MDQxM2wwLjAzMjI1LDEwLjY5MDg4YzAuMDA4MDYsMy45OTYzMSAwLjAxNjEyLDguMjY2NzUgMC4wMjQxOSw5LjI1NTc1eiIgZmlsbD0idXJsKCNjb2xvci0xKSI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNTUuODc1Yy0zOC41MzA2OSwwIC02OS44NzUsLTMxLjM0NDMxIC02OS44NzUsLTY5Ljg3NWMwLC0zOC41MzA2OSAzMS4zNDQzMSwtNjkuODc1IDY5Ljg3NSwtNjkuODc1YzM4LjUzMDY5LDAgNjkuODc1LDMxLjM0NDMxIDY5Ljg3NSw2OS44NzVjMCwzOC41MzA2OSAtMzEuMzQ0MzEsNjkuODc1IC02OS44NzUsNjkuODc1ek04NiwyMS41Yy0zNS41NjM2OSwwIC02NC41LDI4LjkzNjMxIC02NC41LDY0LjVjMCwzNS41NjM2OSAyOC45MzYzMSw2NC41IDY0LjUsNjQuNWMzNS41NjM2OSwwIDY0LjUsLTI4LjkzNjMxIDY0LjUsLTY0LjVjMCwtMzUuNTYzNjkgLTI4LjkzNjMxLC02NC41IC02NC41LC02NC41eiIgZmlsbD0idXJsKCNjb2xvci0yKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                width="20%"
                height="20%"
              />
            </a></p>
          </div>
        </div>
          <ParticlesBg type="lines" bg={true} />
      </div>
    )
  }
}

export default Home;