import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../App.css";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        loginId: "",
        password: "",
        message: "",
        error: "",
      },
      form: {
        loginId: "",
        password: "",
      },
    };
  }
  render() {
    return (
      <>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Registration</h3>
              <div className="form-group mt-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  onChange={(event) => this.setState.target.event.value}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                
                <input
                  type="text"
                  className="form-control mt-1"
                  value={this.state.form.loginId}
                  onChange={(event) => this.changeState(event)}
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  value={this.state.form.loginId}
                  onChange={(event) => this.changeState(event)}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  value={this.state.form.password}
                  onChange={(event) => this.changeState(event)}
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group mt-3">
                <label>Role Id</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  value={this.state.form.password}
                  onChange={(event) => this.changeState(event)}
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(event) => this.SingIn(event)}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
