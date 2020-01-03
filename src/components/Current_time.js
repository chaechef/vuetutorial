import React from 'react';
import './Current_time.css'

class current_time extends React.Component {
  state = {
    date : new Date(),
  }
  tick() {
    this.setState({
        date: new Date()
    })
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
}
  render() {
    return (
      <div className="Current_time">

        <h1>{this.state.date.toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1 $2') }</h1>
      </div>
    )
  }
}
export default current_time;