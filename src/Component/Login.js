import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { event } from "jquery";
// import App from "../App.css";
import ReactDOM from "react-dom";
import Check from "./Check";
import axios from "axios";

export default class Login extends Component {
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

  // signIn() {
  //   if (this.state.form.loginId ==="admin" || this.state.form.password ==="admin") {
  //     if (this.state.password == "") {
  //       this.changeInputError("password", "Password Is Null");
  //       this.state.inputError.error = false;
  //     }
  //     if (this.state.loginId == "") {
  //       this.changeInputError("loginId", "loginId Is Null");
  //       this.state.inputError.error = false;
  //     }
  //     if (this.state.inputError.error == false) {
  //       console.log("ok google you can say..");
  //       return;
  //     }
  //   } else {
  //     let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
  //     axios.post(url, this.state.form).then((res) => {
  //       this.setState({ list: res.data.result.data });

  //       if (-res.data.result.inputerror) {
  //         this.setState({ inputError: res.data.result.inputerror });
  //         console.log("Kasam se error hai..");

  //         console.log(res.data.result.inputerror);
  //         this.changeInputError("error", "true");
  //       } else {
  //         localStorage.setItem("Name", res.data.result.data.name);
  //         return ReactDOM.render(
  //           <React.StrictMode>
  //             < Check />
  //           </React.StrictMode>,
  //           document.getElementById("root")
  //         );
  //       }
  //     });
  //   }
  // }


  signIn(){
    alert(this.state.form.loginId)
    alert(this.state.form.password)
 
     ReactDOM.render(
      
      <React.StrictMode>
        <Check/>
      </React.StrictMode>,
      document.getElementById("root")
    );

  
     
}

  resetForm = () => {
    this.setState({
      form: {
        loginId: "",
        password: "",
      },
    });
  };
  changeInputError = (name, value) => {
    var data = this.state["inputError"];
    data[name] = value;
    this.setState(data);
  }
    changeState(event) {
      let data = this.state["form"];
      data[event.target.name] = event.target.value;
      // let name = event.target.name;
      // let value = event.target.value;
      this.setState(data);
    }
    render() {
      return (
        
        <>
          <div className="Auth-form-container">
            <Form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                  <label>LogIn Id</label>
                  <input
                    type="text"
                    name="loginId"
                    className="form-control mt-1"
                    value={this.state.form.loginId}
                    onChange={(event) => this.changeState(event)}
                    placeholder="Enter LogIn Id"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    value={this.state.form.password}
                    onChange={(event) => this.changeState(event)}
                    placeholder="Enter password"
                  />
                </div>
                <br></br>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.signIn}
                >
                  Submit
                </Button>
                &nbsp; &nbsp;
                <Button type="submit" className="btn btn-danger">
                  Reset
                </Button>
                <p className="forgot-password text-right mt-2">
                  Forgot <a href="#bkc">password?</a>
                </p>
              </div>
            </Form>
          </div>
        </>
      );
    }
  }
