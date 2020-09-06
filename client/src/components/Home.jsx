import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Todo = (props) => {
  return (
    <tr>
      <td>{props.data.todo_description}</td>
      <td>{props.data.todo_responsible}</td>
      <td>{props.data.todo_priority}</td>
      <td>
        <Link to={"/edit/" + props.data._id}>Edit</Link>
      </td>
    </tr>
  );
};
class Home extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        this.setState({
          todos: response.data,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        <h1>Todo lists</h1>,
        <table className="table table-striped" style={{ margin: "20" }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Resoponsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo, idx) => {
              return <Todo data={todo} key={idx} />;
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Home;
