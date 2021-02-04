import React from "react";
import PropTypes from "prop-types";
import { deleteProject } from "../../redux/actions/project";
import moment from "moment";
import { connect } from "react-redux";

const ProjectTable = ({ projects, user, deleteProject }) => {
  const projectsTable = projects.map((projects) => {
    if (user && user.user && user.user._id === projects.user._id) {
      return (
        <tr key={projects._id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <a
              className="text-indigo-600 hover:text-indigo-900"
              href={`/dashboard/project/${projects._id}`}
            >
              {projects.name}
            </a>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {projects.recordingTitle}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {projects.recordingArtist}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {moment(projects.createdAt).format("MMMM Do YYYY")}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="">
              <span
                onClick={(e) => deleteProject(projects._id)}
                style={{ cursor: "pointer" }}
                role="img"
                aria-label="close"
              >
                ❌
              </span>
            </div>
          </td>
        </tr>
      );
    }
  });

  return (
    <>
      {/* <div className="py-6"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> */}
        <div className="mb-8">
              <h1 className="text-4xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">Projects</h1>
            </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
             
                <div className="shadow overflow-hidden border-t border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Recording Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Recording Artist
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date Created
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>

                    <tbody
                      className="bg-white divide-y divide-gray-200"
                      data-todo-x-max="1"
                    >
                      {projectsTable}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
    </>
  );
};

ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { deleteProject })(ProjectTable);
