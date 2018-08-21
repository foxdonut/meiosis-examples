import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.svg";
import "./App.css";

// Separate actions. Try calling greetingActions.editName("test") from the browser console.
const createGreetingActions = update => {
  window.greetingActions = {
    editName: name =>
      update(model => {
        model.name = name;
        return model;
      })
  };
  return window.greetingActions;
};

// This is a Meiosis component
const createGreeting = update => {
  const actions = createGreetingActions(update);

  return {
    view: model => (
      <p>
        <span>Your name: </span>
        <input type="text" value={model.name}
          onChange={evt => actions.editName(evt.target.value)} />
        <span> Hello, {model.name}!</span>
      </p>
    )
  };
};

// This is a React component
class App extends Component {
  constructor(props) {
    super(props);
    const self = this;

    self.state = {
      model: props.models()
    };

    self.actions = {
      increment: () => props.update(model => {
        model.counter++;
        return model;
      })
    };

    self.models = props.models;

    self.greeting = createGreeting(props.update);
  }

  componentDidMount() {
    const self = this;

    self.models.map(model => {
      self.setState({ model });
    });
  }

  render() {
    const model = this.state.model;
    const greeting = this.greeting;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save, to reload.
        </p>
        {greeting.view(model)}
        <p>Counter: {model.counter}</p>
        <Button variant="contained" color="primary"
          onClick={() => this.actions.increment()}>Click Me</Button>
      </div>
    );
  }
}

export default App;
