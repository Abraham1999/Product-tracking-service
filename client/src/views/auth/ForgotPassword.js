import React, { Component } from "react";
import axios from "axios";
import {
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

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      showError: false,
      messageFromServer: "",
    };
  }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = (e) => {
    e.preventDefault();
    if (this.state.email === "") {
      this.setState({
        showError: false,
        messageFromServer: "",
      });
    } else {
      axios
        .post("/user/forgotPassword", {
          email: this.state.email,
        })
        .then((response) => {
          if (response.data === "Email not found") {
            this.setState({
              showError: true,
              messageFromServer: "",
            });
          } else if (response.data === "recovery email sent") {
            this.setState({
              showError: false,
              messageFromServer: "recovery email sent",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { email, messageFromServer, showNullError, showError } = this.state;

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
                      <small>
                        {" "}
                        After you enter your registered email address,{" "}
                      </small>
                      <small className="">
                        you will be sent instructions on how to reset your
                        password.
                      </small>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form" onSubmit={this.sendEmail}>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={email}
                            required
                            onChange={this.handleChange("email")}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                          onClick={this.sendEmail}
                        >
                          Reset my Password
                        </Button>
                      </div>
                    </Form>

                    {showNullError && (
                      <div className="text-center">
                        <p className="text-center p2_form">
                          The email address cannot be null.
                        </p>
                      </div>
                    )}
                    {showError && (
                      <div className="text-center">
                        <p className="text-center p2_form">
                          The email address isn't recognized. Please try again
                          or register a new account.
                        </p>
                      </div>
                    )}
                    {messageFromServer === "recovery email sent" && (
                      <div className="text-center">
                        <p className="text-center p2_form">
                          Reset Password Email Sent Successfully
                        </p>
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

export default ForgotPassword;
