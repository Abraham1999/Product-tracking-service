import React, { Component } from "react";
import axios from "axios";
import {
  Spinner,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

const loading = {
  margin: "1em",
  fontSize: "24px",
};

class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      update: false,
      error: false,
      isLoading: true,
    };
  }

  async componentDidMount() {
    await axios
      .get("/user/reset", {
        params: {
          resetPasswordToken: this.props.match.params.token,
        },
      })
      .then((response) => {
        if (response.data.message === "password reset link is okay") {
          this.setState({
            email: response.data.email,
            update: false,
            isLoading: false,
            error: false,
          });
        } else {
          this.setState({
            update: false,
            isLoading: false,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = (e) => {
    e.preventDefault();

    axios
      .put("/user/updatePassword", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        if (response.data.message === "password updated") {
          this.setState({
            update: true,
            error: false,
          });
        } else {
          this.setState({
            update: false,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  render() {
    const { password, error, isLoading, update } = this.state;

    if (error) {
      return (
        <div  className="text-center divReset">
          <h3 className="text-center">Reset Password</h3>
          <div style={loading} className="text-center">
            <p className="text-center ">
              Problem resetting password. Please retry the forgot password process
            </p>
            <br />
            <Link to="/login-page" className="text-center">
              Login
            </Link>
            <br />
            <Link to="/forgot-password" className="text-center">
              Forgot Password
            </Link>
          </div>
        </div>
      );
    } else if (isLoading) {
      return (
        <div>
          <div className="text-center spinnerReset">
            <Spinner animation="border" />
          </div>
          <h3 className="text-center text-uppercase">Reset Password</h3>

          <div style={loading}>
            <p className="text-center p_form">Loading</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Signup-body">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <br />
                        <br />
                        <h3 className="text-uppercase">Reset Password</h3>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form" onSubmit={this.updatePassword}>
                        <br />
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type="password"
                              placeholder="New Password"
                              name="password"
                              value={password}
                              onChange={this.handleChange("password")}
                              required
                            />
                          </InputGroup>
                        </FormGroup>

                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            onClick={this.updatePassword}
                          >
                            Reset my Password
                          </Button>
                        </div>
                      </Form>

                      {update && (
                        <div className="text-center">
                          <p className="text-center p2_form">
                            Your password has been successfully reset, Please
                            login again.
                          </p>
                          <Link to="/login-page" className="text-center">
                            Login
                          </Link>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a className="text-light" href="/login-page">
                        <small>Login</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a className="text-light" href="/register-page">
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      );
    }
  }
}

export default ResetPassword;
