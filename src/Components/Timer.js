/* eslint-disable */
import React, { Component } from "react";
import './Timer.css'


export default class Timer extends Component {

    constructor (props) {
        super(props)

        this.state = {
            minutes: this.mainState.minutes,
            seconds: this.mainState.seconds,
        }
        this.timer = undefined;
    }

    mainState = this.props.mainState
    



    playStart = () => {
        
        
    
        if (this.timer) clearInterval(this.timer)
            
                this.timer = setInterval(() => {
                    this.setState((state) => {
                    let timeSeconds = parseInt(this.state.seconds, 10)
                    let timeMinutes = parseInt(this.state.minutes, 10)
                    if (timeSeconds > 0) {
                      this.state.timer = this.timer
                    }
                    if (timeSeconds === 0 && timeMinutes > 0) { 
                      this.state.minutes = timeMinutes - 1;
                      this.state.seconds = 59
                      
                    }
                    else if (timeMinutes === 0 && timeSeconds === 0) {
                      return this.pauseStart(timer)
                    }
                    return {
                        seconds: parseInt(state.seconds, 10) - 1
                    }
                    })
                  }, 1000)
                return this.timer   
 
        
    }

    pauseStart = () => {
    
             return clearInterval(this.timer)
        
    }



    render () {

        const {minutes, seconds} = this.state
        const {idx} = this.props.index


        return <span className="description">
        <button className="icon icon-play" onClick={this.playStart}></button>
        <button className="icon icon-pause" onClick={this.pauseStart}></button>
        {minutes + ':' + seconds}
      </span>

    }
}