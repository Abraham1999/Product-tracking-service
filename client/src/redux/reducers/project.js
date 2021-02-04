import { CREATE_PROJECT, GET_PROJECT, GET_PROJECTS, PROJECT_ERROR, UPDATE_PROJECT, REMOVE_COLLABORATOR, DELETE_PROJECT } from "../actions/types";

const initialState = {
  project: null,
  projects: [],
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROJECT:
    case UPDATE_PROJECT:
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false
      };
      case DELETE_PROJECT:
        return {
          ...state,
          projects: state.projects.filter(project => project._id !== payload),
          loading: false
        }
      case REMOVE_COLLABORATOR:
        return {
          ...state,
          project: {
            ...state.project,
            collaborators: state.project.collaborators.filter(collaborator => collaborator.collaboratorId !== payload)
          },
          loading: false
        }
    case PROJECT_ERROR: 
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}