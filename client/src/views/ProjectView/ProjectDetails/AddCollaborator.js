import React from "react";
import Axios from "axios";
import { Card, Row, Col, Container, Button, Label } from "reactstrap";
import { Field } from "react-final-form";
import Wizard from "./AddCollaboratorWizard";
import { FieldArray } from "react-final-form-arrays";
const createHistory = require("history").createBrowserHistory;

const AddCollaborator = (props) => {
  const onSubmit = async (values) => {
    Axios.post(`/projects/add-collaborator/${props.props}`, values).then(
      (response) => {
        if (response.data) {
          console.log("Successful");
          let history = createHistory();
          history.push(`/dashboard/project/${props.props}`);
          window.location.reload();
        } else {
          console.log("Failed to add");
        }
      }
    );
  };

  return (
    <>
      <Wizard onSubmit={onSubmit}>
        <Wizard.Page>
          <div>
            <br />
            <FieldArray name="collaborators">
              {({ fields }) => (
                <div>
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
                </div>
              )}
            </FieldArray>
          </div>
        </Wizard.Page>
      </Wizard>
    </>
  );
};

export default AddCollaborator;
