import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import { Button, Card, Container, Modal, ModalBody } from "reactstrap";
import axios from "axios";
// import PDFDocument from "../CollaboratorView/PdfDocument";
import PdfTemplate from "../CollaboratorView/JsPdf";
class SignatureBox extends Component {
  state = { trimmedDataURL: null, modal: false, status: "", modal2: false };

  sigPad = {};
  clear = () => {
    this.sigPad.clear();
  };
  trim = () => {
    this.setState(
      {
        trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
      },

      () => {
        const data = {
          signature: this.state.trimmedDataURL,
        };
        axios
          .post(
            `/projects/signature/${this.props.props.match.params.id}/${this.props.props.match.params.collaboratorId}`,
            data
          )
          .then((res) => console.log("successful"));
        this.setState({
          modal: !this.state.modal,
        });
      }
    );
  };

  statusModal = () => {
    this.setState({
      modal2: !this.state.modal2,
    });
  };

  componentDidMount() {
    axios
      .get(
        `/projects/pdfStatus/${this.props.props.match.params.id}/${this.props.props.match.params.collaboratorId}`
      )
      .then((res) => {
        this.setState({
          status: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  setModal = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <div className="">
          <br />
          <h1 className="text-4xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
            Signature
          </h1>
          <br />
          <hr className="horizontal-line4" />

          <SignaturePad
            canvasProps={{ className: "signatureCanvas" }}
            ref={(ref) => {
              this.sigPad = ref;
            }}
          />
        </div>
        <br />

        <div className="container">
          <button
            className="inline-flex items-center mr-2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={this.clear}
          >
            Clear
          </button>
          <button
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white  bg-green-400 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={this.trim}
          >
            Save
          </button>

          <PdfTemplate props={this.props.data} />
          <br />
          <br />
        </div>
        <Container className="modalProject">
          <Modal
            isOpen={this.state.modal}
            toggle={this.setModal}
            className="ModalMargin2"
          >
            <ModalBody>
              <div className="text-center resendEmailDiv">
                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                <h5>Signed Successfully</h5>
                <h6>
                  <a href="/">Visit our website</a>
                </h6>
                <Button color="primary" onClick={this.setModal}>
                  Cancel
                </Button>
              </div>
            </ModalBody>
          </Modal>
        </Container>

        <Container className="modalProject">
          <Modal
            isOpen={this.state.modal2}
            toggle={this.statusModal}
            className="ModalMargin2"
          >
            <ModalBody>
              <div className="text-center resendEmailDiv">
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>
                <h5>
                  You cannot download pdf until all collaborators have signed
                </h5>
                <Button color="primary" onClick={this.statusModal}>
                  Cancel
                </Button>
              </div>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default SignatureBox;
