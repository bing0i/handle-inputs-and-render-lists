import { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
    let initIsEdittings = new Array(this.props.tasks.length);
    this.state = {
      isEdittings: initIsEdittings.fill(false),
    };
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveButton(e) {
    const index = e.target.className;
    this.props.updateTasksState(index, '');
  }

  handleEditButton(e) {
    const index = e.target.className;
    let newIsEdittings = this.state.isEdittings.slice();
    newIsEdittings[index] = !newIsEdittings[index];
    this.setState({
      isEdittings: newIsEdittings,
    });
  }

  handleInputChange(e) {
    const index = e.target.className;
    this.props.updateTasksState(index, e.target.value);
  }

  render() {
    return (
      <div>
          <ul>
            {this.props.tasks.map((task, index) => {
              return (
                this.state.isEdittings[index]
                ? <div key={index}>
                    <span>{index + '. '}</span>
                    <input className={index} value={task} onChange={this.handleInputChange} />
                    <button className={index} onClick={this.handleEditButton} value="resubmit">Resubmit</button>
                    <button className={index} onClick={this.handleRemoveButton}>Remove</button>
                  </div>
                : <div key={index}>
                    <span className={index}>{index + '. ' + task}</span>
                    <button className={index} onClick={this.handleEditButton}>Edit</button>
                    <button className={index} onClick={this.handleRemoveButton}>Remove</button>
                  </div>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default Overview;