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
        return <div key="{item.id}">
          <h2>{item.name}</h2>

          <p>{item.start_time}</p>

          <p>{item.description}</p>

          <a className='button' href={"https://www.facebook.com/events/" + item.id} target="_blank">
            More info &amp; RSVP
          </a>
        </div>
      });
    }

    return (
      <div className="app">
        <h1>CeeCee events</h1>
        <p>Upcoming events in the creative community of Enschede</p>

        {eventsList}
      </div>
    );
  }
}

export default App;
