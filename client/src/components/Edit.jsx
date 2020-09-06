import React, { Component } from "react";
import axios from "axios";

class Edit extends Component {
  state = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: "",
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/" + this.props.match.params.id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          todo_description: res.data.todo_description,
          todo_responsible: res.data.todo_responsible,
          todo_priority: res.data.todo_priority,
          todo_completed: res.data.todo_completed,
        });
      })
      .catch((error) => {});
  }
  onchangeHanler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/" + this.props.match.params.id, this.state)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.props.history.push("/");
  };
  checkBoxHandler = (e) => {
    this.setState({
      todo_completed: e.target.checked,
    });
  };
  render() {
    return (
      <>
        <h1>Update Todo</h1>
        <form className="mt-5" onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              name="todo_description"
              onChange={this.onchangeHanler}
            />
          </div>
          <div className="form-group">
            <label>Responsiblity</label>
            <input
              type="text"
              value={this.state.todo_responsible}
              name="todo_responsible"
              className="form-control"
              onChange={this.onchangeHanler}
            />
          </div>

          <div className="form-group form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              value="Low"
              onChange={this.onchangeHanler}
              name="todo_priority"
              checked={this.state.todo_priority === "Low"}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input
              type="radio"
              value="Medium"
              className="form-check-input"
              name="todo_priority"
              onChange={this.onchangeHanler}
              checked={this.state.todo_priority === "Medium"}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input
              type="radio"
              value="High"
              onChange={this.onchangeHanler}
              name="todo_priority"
              className="form-check-input"
              checked={this.state.todo_priority === "High"}
            />
            <label className="form-check-label">High</label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="todo_completed"
              checked={this.state.todo_completed}
              onChange={this.checkBoxHandler}
            />
            <label className="form-check-label">Todo Completed</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Todo
          </button>
        </form>
      </>
    );
  }
}

export default Edit;
