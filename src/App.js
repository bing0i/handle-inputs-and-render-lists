import { Component } from "react";
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: '',
    };

    this.submitArrayElement = this.submitArrayElement.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.updateTasksState = this.updateTasksState.bind(this);
  }

  submitArrayElement() {
    this.setState({
      tasks: this.state.tasks.concat(this.state.inputValue),
      numberOfTasks: this.state.numberOfTasks + 1,
    });
  }

  handleInputValue(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  updateTasksState(id) {
    let newTasks = this.state.tasks.slice();
    newTasks.splice(id, 1);
    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.inputValue} onChange={this.handleInputValue} />
        <button onClick={this.submitArrayElement}>Submit</button>
        <Overview updateTasksState={this.updateTasksState} tasks={this.state.tasks} />
      </div>
    );
  };
}

export default App;
