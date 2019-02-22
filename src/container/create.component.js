import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props);
         this.onChangePersonName = this.onChangePersonName.bind(this);
            this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
            this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state = {
              title: '',
              desc: '',
              id:''
          }
        }
          onChangePersonName(e) {
            this.setState({
              title: e.target.value
            });
          }
          onChangeBusinessName(e) {
            this.setState({
              desc: e.target.value
            })  
          }
          onChangeGstNumber(e) {
            this.setState({
              id: e.target.value
            })
          }
          onSubmit(e) {
            e.preventDefault();
            const obj = {
                title: this.state.title,
                desc: this.state.desc,
                id: this.state.id
            };
            let config = {
                headers: { 'Content-Type': 'application/json' }
              };
            axios.post('http://localhost:3000/todos', obj, config)
            .then(res => console.log(res.data));
            
            this.setState({
              title: '',
              desc: '',
              id: ''
            })
          }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.title}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.desc}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.id}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}