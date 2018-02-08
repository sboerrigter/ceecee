import React, { Component } from 'react';
import Facebook from '../lib/Facebook';

class App extends Component {
  constructor() {
    super();

    this.state = {
        events: false,
    }
  }

  componentDidMount() {
    const facebook = new Facebook();

    facebook.getEvents().then(events => {
      this.setState({events: events});
    });
  }

  render() {
    let eventsList = 'Loading...';

    if (this.state.events) {
      eventsList = this.state.events.map(item => {
        console.log(item);
        return <div key="{item.id}">{item.name}</div>
      });
    }

    return (
      <div className="app">
        <h1>CeeCee events</h1>
        <p>Upcomming events in the creative community of Enschede</p>

        {eventsList}
      </div>
    );
  }
}

export default App;
