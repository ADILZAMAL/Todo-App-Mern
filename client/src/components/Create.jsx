import React, { Component } from "react";
import axios from "axios";
class Create extends Component {
  state = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false,
  };

  onChangeDescription = (e) => {
    this.setState({
      todo_description: e.target.value,
    });
  };

  onChangeResponsible = (e) => {
    this.setState({
      todo_responsible: e.target.value,
    });
  };

  onChangePriority = (e) => {
    this.setState({
      todo_priority: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add", this.state)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_complete: false,
    });
  };

  render() {
    return (
      <div>
        <form className="mt-5" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsiblity</label>
            <input
              type="text"
              value={this.state.responsible}
              className="form-control"
              onChange={this.onChangeResponsible}
            />
          </div>

          <div className="form-group form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              value="Low"
              onChange={this.onChangePriority}
              checked={this.state.priority === "Low"}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input
              type="radio"
              value="Medium"
              className="form-check-input"
              onChange={this.onChangePriority}
              checked={this.state.priority === "Medium"}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input
              type="radio"
              value="High"
              onChange={this.onChangePriority}
              className="form-check-input"
              checked={this.state.priority === "High"}
            />
            <label className="form-check-label">High</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Todo
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
