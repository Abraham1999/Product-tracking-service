import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUserProjects } from "../../redux/actions/project";
import Navbar from "../Talent/Dashboard/Navbar";
import ProjectsTable from "./ProjectsTable";
import ProjectModal from "./ProjectModal";

const Project = ({ getCurrentUserProjects, project: { projects } }) => {
  useEffect(() => {
    getCurrentUserProjects();
  }, [getCurrentUserProjects]);

  return (
    <>
      <Navbar />
      <ProjectModal />
      <ProjectsTable projects={projects} />      
    </>
  );
}; 

Project.propTypes = {
  getCurrentUserProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getCurrentUserProjects })(Project);
