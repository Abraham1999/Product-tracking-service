import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjectById } from "../../../redux/actions/project";
import Spinner from "../../../utils/Spinner";
import ProjectTop from "./ProjectTop";
import Description from "./Description";
import Collaborators from "./Collaborators";
import PdfTemplate from "./JsPdf";
import Navbar from "../../Talent/Dashboard/Navbar";

const ProjectDetails = ({
  getProjectById,
  project: { project, loading },
  match,
  auth,
}) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  return loading || project === null ? (
    <Spinner />
  ) : (
    <>
     <Navbar />
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <br />
          <div className="container mx-auto px-8 bg-white overflow-hidden shadow-xl rounded-lg">
            <ProjectTop project={project} />
            <Description project={project} />
          </div>
          <br />
          <PdfTemplate props={project} />
          <br />
          <br />
          <Collaborators project={project} id={project._id} />
        </div>
      </div>
    </>
  );
};

ProjectDetails.propTypes = {
  getProjectById: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  project: state.project,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getProjectById,
})(ProjectDetails);
