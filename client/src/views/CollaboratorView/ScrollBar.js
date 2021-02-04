import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../utils/Spinner";
import { getProjectWithCollaborator } from "../../redux/actions/project";
import Collaborator from "./CollaboratorView";

const CollaboratorView = ({
  props,
  getProjectWithCollaborator,
  project: { project, loading },
}) => {
  useEffect(() => {
    getProjectWithCollaborator(
      props.match.params.id,
      props.match.params.collaboratorId
    );
  }, [getProjectWithCollaborator]);

  return loading || project === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Collaborator project={project} />
    </Fragment>
  );
};

CollaboratorView.propTypes = {
  getProjectWithCollaborator: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjectWithCollaborator })(
  CollaboratorView
);
