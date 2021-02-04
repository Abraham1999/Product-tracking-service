import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Modal, ModalBody } from "reactstrap";
import { Image } from "react-bootstrap";
import {
  deleteCollaborator,
  resendToCollaborator,
} from "../../../redux/actions/project";
import { connect } from "react-redux";
import DoughnutChart from "./DoughnutChart";

const Collaborators = ({
  project: { collaborators },
  id,
  deleteCollaborator,
  resendToCollaborator,
}) => {
  const [showModal2, setShowModal2] = useState(false);
  const toggle = () => setShowModal2(!showModal2);

  return (
    <>
      <DoughnutChart collaborators={collaborators} />

      <br />
      <br />
      <div className="container mx-auto px-8 bg-white shadow-xl overflow-hidden rounded-lg">
        <div className="px-4">
          <br />
          <h1 className="text-4xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate mb-4">
            Collaborators
          </h1>
          <hr className="horizontal-line4" />
        </div>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {collaborators.map((item, index) => (
            <div key={index}>
              <div className="container mx-auto px-8 bg-white overflow-hidden shadow rounded-lg">
                {item.signed === true ? (
                  <div>
                    <img
                      fluid
                      className="signatureImage"
                      alt="Signature"
                      src={item.signature}
                    />
                    <hr />
                  </div>
                ) : (
                  <div>
                    <div className=" imageDiv">
                      <br />
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Not Signed
                      </span>
                      <br />
                    </div>
                    <hr />
                  </div>
                )}

                <h3 class="text-lg leading-6 font-medium text-gray-900 mt-2 mb-1">
                  {item.name}
                </h3>
                <ul className="list-unstyled">
                  <li className="">
                    <div className="inline-flex items-center">
                      <svg
                        className=" mr-2 h-4 w-4"
                        x-description="Heroicon name: mail"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <h6 className="mb-0 textCss">{item.email}</h6>
                    </div>
                  </li>
                  <li className="">
                    <div className="inline-flex items-center">
                      <svg
                        className="mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <h6 className="mb-0 textCss">{item.mobileNo}</h6>
                    </div>
                  </li>
                  <li className="">
                    <div className="inline-flex items-center">
                      <svg
                        className=" mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <h6 className="mb-0 textCss">{item.role}</h6>
                    </div>
                  </li>
                  <li className="">
                    <div className="inline-flex items-center ">
                      <svg
                        className="mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                      <h6 className="mb-0 textCss">{item.split}</h6>
                    </div>
                  </li>
                </ul>

                {item.signed === true ? (
                  <div>
                    <button
                      className="bg-red-600 text-white active:bg-red-700 uppercase text-xs px-2.5 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 inline-flex justify-center "
                      onClick={(e) =>
                        deleteCollaborator(
                          e.preventDefault(),
                          id,
                          item.collaboratorId
                        )
                      }
                    >
                      Delete
                    </button>
                    <br />
                  </div>
                ) : (
                  <div>
                    <div>
                      <button
                        className="bg-green-400 text-white active:bg-red-500 uppercase text-xs px-2.5 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 mt-2 inline-flex justify-center "
                        onClick={(e) => (
                          toggle(),
                          resendToCollaborator(id, item.collaboratorId)
                        )}
                      >
                        Resend
                      </button>

                      <button
                        className="bg-red-600 text-white active:bg-red-700 uppercase text-xs px-2.5 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 mt-2 inline-flex justify-center "
                        onClick={(e) =>
                          deleteCollaborator(id, item.collaboratorId)
                        }
                      >
                        Delete
                      </button>
                    </div>
                    <br />
                  </div>
                )}

                {showModal2 ? (
                  <>
                    <div
                      className="fixed z-10 inset-0 overflow-y-auto"
                      style={{ height: "560px" }}
                      onClick={() => setShowModal2(!showModal2)}
                    >
                      <div className="relative w-auto my-6 mx-auto max-w-2xl pt-20 px-4 ">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="relative p-6 flex-auto items-center text-center ">
                            <span className="h-8 w-8 rounded-full sm:inline-block sm:align-middle bg-green-500 flex items-center justify-center ring-8 ring-white">
                              <svg
                                className="h-5 w-5 text-white sm:inline-block sm:align-middle"
                                x-description="Heroicon name: check"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <h3 class="text-lg leading-6 font-medium text-center	 text-black-900">
                              Email Resent Successfully
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <br />
              <br />
            </div>
          ))}
          <br />
          <br />
        </dl>
      </div>
    </>
  );
};

Collaborators.propTypes = {
  id: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  deleteCollaborator: PropTypes.func.isRequired,
  resendToCollaborator: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  deleteCollaborator,
  resendToCollaborator,
})(Collaborators);
