import logo from './logo.svg';
import './App.css';
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
            <h1>Текущее время</h1>
        </div>
    )
  }

}

export default Clock;
