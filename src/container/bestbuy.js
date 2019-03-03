import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

class BbList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bblist: []
    };
  }

  componentDidMount() {
    //const url = "../lib/bbresp.json";
    const url =
      "https://marketplace.bestbuy.ca/api/offers?api_key=7b363e5a-ea5c-4cc0-b361-32eebbbe42ac&max=100";
    axios({
      method: "get",
      url: url,
      responseType: "json"
    })
      .then(resp => {
        console.log(resp);
        this.setState({
          bblist: resp.data.offers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const BestBuyList = this.state.bblist;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th> SKU </th>
              <th> Title </th>
              <th> Price </th>
              <th> Quantity </th>
            </tr>
            {BestBuyList.map(list => (
              <tr key={list.offer_id}>
                <td> {list.shop_sku} </td>
                <td> {list.product_title} </td>
                <td> $ {list.price} </td>
                <td> {list.quantity} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BbList;
