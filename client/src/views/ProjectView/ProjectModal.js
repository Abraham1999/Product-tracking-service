import React, { useState } from "react";
import ProjectForm from "./ProjectForm/ProjectForm";

const ProjectModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <br />
      <br />
      <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">

      
      <button
        className="bg-green-500 text-white active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 inline-flex justify-center "
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(!showModal)}
      >
        Create Project
      </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed z-10 inset-0 overflow-y-auto" style={{ height: "560px" }}>
                <div className="relative w-auto my-6 mx-auto max-w-2xl pt-20 px-4 ">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                      <h3 className="text-3xl font-semibold">Create Project</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <ProjectForm />
                  </div>
                </div>
              </div>
            </div>
          </>
      ) : null}
    </>
  );
};

export default ProjectModal;
