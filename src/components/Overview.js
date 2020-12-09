import { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfTasks: 0,
    };
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
  }

  handleRemoveButton(e) {
    const id = e.target.id;
    this.props.updateTasksState(id);
  }

  render() {
    return (
      <div>
          <ul>
            {this.props.tasks.map((task, index) => {
              return (
                <div>
                  <li id={index}>{index + '. ' + task}</li>
                  <button id={index} onClick={this.handleRemoveButton}>Remove</button>
                </div>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default Overview;