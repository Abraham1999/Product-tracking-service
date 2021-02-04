import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "reactstrap";
import SignaturePad from "../SignatureView/SignaturePad";
import moment from "moment";
import ScrollBar from "./ScrollBar";
import NavBar from "views/Talent/Dashboard/Navbar";

const CollaboratorView = (props) => {
  const [ProjectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    getProjectInfo();
  }, []);

  const getProjectInfo = () => {
    Axios.get(
      `/projects/project/${props.match.params.id}/${props.match.params.collaboratorId}`
    ).then((response) => {
      if (response.data[0]) {
        setProjectInfo(response.data[0]);
      } else {
        console.log("Failed to fetch the requested data");
      }
    });
  };

  return (
    <>
      <NavBar />

      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <br />
          <div className="container mx-auto px-8 bg-white overflow-hidden shadow-xl rounded-lg">
            <br />
            <h1 className="text-4xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
              {ProjectInfo.name}
            </h1>
            <br />
            <div className="">
              <small>
                Created:{" "}
                {moment(ProjectInfo.createdAt).format("MMMM Do YYYY, h:mm a")}
              </small>
              <br />
              <small>
                Last Updated:{" "}
                {moment(ProjectInfo.updatedAt).format("MMMM Do YYYY, h:mm a")}
              </small>
            </div>
            <hr className="horizontal-line" />

            <ScrollBar props={props} />

            <br />
            <br />

            <br />
            <br />
          </div>
        </div>
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-8 bg-white overflow-hidden shadow-xl rounded-lg">
            <SignaturePad props={props} data={ProjectInfo} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CollaboratorView;
