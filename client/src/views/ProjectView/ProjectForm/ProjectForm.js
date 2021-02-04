import React from "react";
import Axios from "axios";
import { Field } from "react-final-form";
import Wizard from "./WizardView/WizardPages";
import { FieldArray } from "react-final-form-arrays";
import { Card, CardBody, Row, Col, Container, Button, Label } from "reactstrap";

const createHistory = require("history").createBrowserHistory;

const onSubmit = async (values) => {
  Axios.post("/projects", values).then((response) => {
    if (response.data) {
      console.log("Successful");
      let history = createHistory();
      history.push("/dashboard");
      window.location.reload();
    } else {
      console.log("Failed to add");
    }
  });
};

const ProjectForm = () => {
  return (
    <>
      <Wizard onSubmit={onSubmit}>
        <Wizard.Page>
          <div>
            <label
              htmlFor="Song"
              className="block text-sm font-medium text-gray-700"
            >
              Song Name
            </label>
            <div className="mt-2">
              <Field
                placeholder="Song name"
                name="name"
                component="input"
                type="text"
                id="Song"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <br />

          <div>
            <label
              htmlFor="recording-artist"
              className="block text-sm font-medium text-gray-700"
            >
              Recording Artist
            </label>
            <div className="mt-2">
              <Field
                placeholder="Recording Artist"
                name="recordingArtist"
                component="input"
                type="text"
                id="recording-artist"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <br />

          <div>
            <label
              htmlFor="recording-title"
              className="block text-sm font-medium text-gray-700"
            >
              Recording Title
            </label>
            <div className="mt-2">
              <Field
                placeholder="Recording Title"
                name="recordingTitle"
                component="input"
                type="text"
                id="recording-title"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <br />
          <div>
            <label
              htmlFor="stateOfLaw"
              className="block text-sm font-medium text-gray-700"
            >
              Specify the name of the State and Country of which the validity,
              interpretation and legal effect of this Agreement will be governed
              by?
            </label>
            <div className="mt-2">
              <Field
                placeholder="State Of Law"
                name="stateOfLaw"
                component="input"
                id="stateOfLaw"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </Wizard.Page>

        <Wizard.Page>
          <>
            <FieldArray name="collaborators">
              {({ fields }) => (
                <>
                  <div className="AddButton">
                    <button
                      type="button"
                      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() =>
                        fields.push({
                          name: "",
                          email: "",
                        })
                      }
                    >
                      Add Collaborator
                    </button>
                  </div>
                  <br />
                  <div>
                    {fields.map((name, index) => (
                      <div key={name}>
                        <label className="block text-sm font-medium text-gray-700">
                          Collaborator Details: #{index + 1}
                        </label>
                        <div className="mt-2">
                          <Field
                            name={`${name}.name`}
                            component="input"
                            placeholder="Full Name"
                            type="text"
                            className="appearance-none block  w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="mt-2">
                          <Field
                            name={`${name}.email`}
                            component="input"
                            placeholder="Email"
                            type="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="mt-2">
                          <Field
                            name={`${name}.mobileNo`}
                            component="input"
                            placeholder="Mobile Number"
                            type="number"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="mt-2">
                          <Field
                            name={`${name}.role`}
                            component="input"
                            placeholder="Role"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="mt-2">
                          <Field
                            name={`${name}.split`}
                            component="input"
                            placeholder="Split"
                            type="number"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="text-center">
                          <span
                            onClick={() => fields.remove(index)}
                            style={{ cursor: "pointer" }}
                            role="img"
                            aria-label="close"
                          >
                            ❌
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </FieldArray>
          </>
        </Wizard.Page>
      </Wizard>
    </>
  );
};
export default ProjectForm;
