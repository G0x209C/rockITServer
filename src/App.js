import React from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './pages/Start.js';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      url: 'http://localhost:8080',
      state: 'connecting',
      room: 'defaultRoom',
      id: null,
      messages: [],
      error: null,
      message: '',
      player:{
        name: null,
        score: 0
      }
    };
  }

  componentDidMount()
  {
    let client = new ActionheroWebsocketClient({url:this.state.url}); // eslint-disable-line
    this.setState({client}, ()=>{this.connect()});
  }

  getClient()
  {
    return this.state.client;
  }

  connect () {
    const client = this.state.client

    client.on('connected', () => { this.setState({ state: 'connected', id: client.id }) })
    client.on('disconnected', () => { this.setState({ state: 'disconnected' }) })
    client.on('error', (error) => { this.setState({ error }) })
    client.on('reconnect', () => { this.setState({ state: 'reconnect' }) })
    client.on('reconnecting', () => { this.setState({ state: 'reconnecting' }) })

    client.on('alert', function (message) { console.warn(message) })
    client.on('api', function (message) { console.warn(message) })

    // client.on('welcome', (message) => { this.appendMessage(message) })
    // client.on('say', (message) => { this.appendMessage(message) })

    client.connect((error, details) => {
      if (error) { return this.setState({ error }) }
      client.action('createChatRoom', { name: this.state.room }, () => {
        client.roomAdd(this.state.room)
      })
    })
  }

  render (){
    return(
    <div className="App">
      <header className="App-header">
        <Start client={this.state.client}/>
      </header>
    </div>
  );
}
}