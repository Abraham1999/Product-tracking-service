import React, { useState } from "react";
import PropTypes from "prop-types";
import EditProject from "./EditProject";
import AddCollaborator from "./AddCollaborator";
import moment from "moment";

const ProjectTop = ({ project: { name, _id, createdAt, updatedAt } }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);

    if (modal === true) {
      window.location.reload();
    }
  };
  const [showModal, setShowModal] = useState(false);

  const [showModal2, setShowModal2] = useState(false);

  return (
    <>
      <div className="">
        <br />
        <h1 className="text-4xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
          {name}
        </h1>
        <br />

        <button
          onClick={() => setShowModal(!showModal)}
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          EDIT PROJECT
        </button>

        {showModal ? (
          <>
            <div
              className="fixed z-10 inset-0 overflow-y-auto"
              style={{ height: "560px" }}
            >
              <div className="relative w-auto my-6 mx-auto max-w-2xl pt-20 px-4 ">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                  <div className="flex items-start justify-between p-5 rounded-t-lg bg-gray-800">
                    <h3 className="text-3xl font-semibold text-white ">
                      Edit Project
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <EditProject props={_id} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        <button
          onClick={() => setShowModal2(!showModal2)}
          className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
        >
          ADD COLLABORATOR
        </button>

        {showModal2 ? (
          <>
            <div
              className="fixed z-10 inset-0 overflow-y-auto"
              style={{ height: "560px" }}
            >
              <div className="relative w-auto my-6 mx-auto max-w-2xl pt-20 px-4 ">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                  <div className="flex items-start justify-between p-5 rounded-t-lg bg-gray-800">
                    <h3 className="text-3xl font-semibold text-white ">
                      Add Collaborator
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal2(false)}
                    >
                      <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <AddCollaborator props={_id} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className="dateFormatStyle">
          <small>
            Created: {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
          </small>
          <br />
          <small>
            Last Updated: {moment(updatedAt).format("MMMM Do YYYY, h:mm a")}
          </small>
        </div>

        <hr className="horizontal-line" />
      </div>
    </>
  );
};

ProjectTop.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectTop;
