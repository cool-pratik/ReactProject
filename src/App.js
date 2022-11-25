// import logo from './logo.svg';
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { IconName } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
// import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiEdit } from "react-icons/ti";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <img
            src={require("../src/logo project.jpg")}
            width="100"
            height="50"
            className='d-inline-block align-left'
          />
          <Container>
            <Navbar.Brand href="#home">Rays Technologyes</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="Registration">
                Registration
                <TiEdit style={{ color: "aqua", fontSize: "20px" }} />{" "}
              </Nav.Link>
              <Nav.Link href="LogIn">
                LogIn
                <GiCarKey style={{ color: "aqua", fontSize: "20px" }} />{" "}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/Registration" key="" component={Registration} />
          <Route path="/Login" key="" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
