import React , {Component} from 'react';
import { Link } from 'react-router-dom';

import mlogos from "../images/mlogos.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1>MarketUnity</h1>
          <p>
          <strong>Integration Platform </strong>for Online Marketplaces.
            <br /></p>
          <div>
                  <img src={mlogos} responsive />
                </div>
         
            <br />
            <p>
            <Link to="/list" className="btn btn-success">
             
                Head to the List
              
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;