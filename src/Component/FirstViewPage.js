import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import { FaUserPlus } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

export default class FirstViewPage extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <img
            src={require("../Component/logoproject.jpg")}
            width="100"
            height="50"
            className="d-inline-block align-left"
          />
          <Container>
            <Nav className="me-auto">
                <Nav.Link>Home</Nav.Link>
              <Nav.Link href="Registration">
                Registration <FaUserPlus></FaUserPlus>
              </Nav.Link>
              <Nav.Link href="Login">LogIn <MdLogin></MdLogin></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/Registration" component={Registration}></Route>
          <Route path="/LogIn" component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}
