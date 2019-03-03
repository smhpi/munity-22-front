import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .delete("http://localhost:8080/product/" + this.props.obj.id)
      .then(console.log("Deleted"))
      .then(alert("Product Deleted"))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.sku}</td>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.quantity}</td>
        <td>{this.props.obj.bbquantity}</td>
        <td>
          <Link to={"/list/" + this.props.obj.id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
