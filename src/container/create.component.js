import React, { Component } from "react";
import axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "",
      body: "",
      id: ""
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      body: e.target.value
    });
  }
  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      body: this.state.body,
      id: this.state.id
    };
    let config = {
      headers: { "Content-Type": "application/json" }
    };
    axios.post("/product", obj, config).then(res => console.log(res.data));

    this.setState({
      title: "",
      body: "",
      id: ""
    });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.body}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>ID: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeId}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Product"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
