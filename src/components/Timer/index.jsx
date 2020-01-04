import React from 'react';
import './style.css'

class CurrentTime extends React.Component {
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
        <h1>{this.state.date.toISOString()}</h1>
      </div>
    )
  }
}
export default CurrentTime;