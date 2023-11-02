/* eslint-disable */
import React, { Component } from 'react';
import { formatDistance, subDays } from 'date-fns';
import PropTypes from 'prop-types';
import Timer from './Timer';

import './Task.css';
const _ = require('lodash');

export default class Task extends Component {

  constructor (props) {
    super(props)

    this.state = {
      minutes: this.props.state.minutes,
      seconds : this.props.state.seconds,
      timerOn : false,
      timer: null,
    }
  }

timer

startTimer = (idx) => {
const item = this.props.state.tasks[idx]




this.timer = setInterval(() => {
  this.setState((state) => {
    return {
      seconds: parseInt(state.seconds, 10) - 1,
      timerOn : true,
      timer: this.timer
    }
  })
}, 1000);

if (this.state.timer) {
  clearInterval(this.timer)
}
console.log(this.state.timer)
}

pauseTimer = (idx) => {
  const item = this.props.state.tasks[idx]
}


  render() {
    const tasks = this.props.state.tasks;
   

    return tasks.map((el, idx) => {
      const { active, editing, minutes, seconds } = el;

      let gfg = _.uniqueId();

      return (
        <li className={el.active ? '' : 'completed'} id={el.id} key={idx}>
          <div className={editing ? 'not-active' : 'view'}>
            <input checked={active ? '' : 'checked'} className="toggle" type="checkbox" onClick={() => this.props.taskCompleted(idx)} id={idx} />
            <label>
              <span className="title description">{el.value}</span>
              <Timer index = {idx} key={idx} mainState = {this.props.state}/>
              <span className='created'>{formatDistance(subDays(new Date(), 0), new Date())}</span>
            </label>
            <button className="icon icon-edit" onClick={() => this.props.taskEdit(idx)}></button>
            <button className="icon icon-destroy" onClick={() => this.props.taskDelete(idx)}></button>
          </div>
          <input
            type="text"
            className={editing ? 'edited' : 'not-active'}
            id={gfg}
            defaultValue={el.value}
            onKeyUp={(e) => this.props.editState(e, idx)}
          />
        </li>
      );
    });
  }
}

Task.defaultProps = {
  tasks: [],
};
Task.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};
