import React, { Component } from "react";
class Create extends Component {
  state = {
    description: "",
    responsible: "",
    priority: "",
    completed: false,
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangeResponsible = (e) => {
    this.setState({
      responsible: e.target.value,
    });
  };

  onChangePriority = (e) => {
    this.setState({
      priority: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.description);
    console.log(this.state.responsible);
    console.log(this.state.priority);
    console.log(this.state.completed);

    this.setState({
      description: "",
      responsible: "",
      priority: "",
      completed: false,
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
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsiblity</label>
            <input
              type="text"
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
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
