import {
  GET_PROJECTS,
  PROJECT_ERROR, 
  CREATE_PROJECT,
  GET_PROJECT,
  UPDATE_PROJECT,
  REMOVE_COLLABORATOR,
  DELETE_PROJECT
} from "./types";
import  {GetUserProjects}  from "../../services/ProjectService";
import axios from 'axios'

//Get current user PROJECT
export const getCurrentUserProjects = () => async (dispatch) => {
  try {
    const res = await GetUserProjects();    

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    }); 
 
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

//create project
export const createProject = (values) => async (dispatch) => {
  try {
    const res = await axios.post("/projects", values);
    dispatch({
      type: CREATE_PROJECT,
      payload: res.data, 
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


//Get project
export const getProjectById = id => async dispatch => {
  try {
    const res = await axios.get(`/projects/${id}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}



export const addProjectDescription = (_id, projectData) => async (dispatch) => {
  try {
    const res = await axios.post(`/projects/edit/description/${_id}`, projectData);
    dispatch({ 
      type: UPDATE_PROJECT,
      payload: res.data, 
    });
  } catch (err) {
    dispatch({ 
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};




//Get Collaborator project
export const getCollaboratorAndProjectById = (id, collaboratorId ) => async dispatch => {
  try {
    const res = await axios.get(`/projects/${id}/${collaboratorId}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


//Delete collaborator
export const deleteCollaborator = (id, collaboratorId) => async dispatch => {

  try {
     await axios.delete(`/projects/delete/${id}/${collaboratorId}`);

    dispatch({
      type: REMOVE_COLLABORATOR,
      payload: collaboratorId
    });

  } catch (err) { 
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getProjectWithCollaborator = (id, collaboratorId) => async dispatch => {

  try {
    const res = await axios.get(`/projects/project/${id}/${collaboratorId}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });

  } catch (err) { 
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getCollaborator = (id, collaboratorId) => async dispatch => {

  try {
    const res = await axios.get(`/projects/${id}/${collaboratorId}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });

  } catch (err) { 
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


//Resend To Collaborator 
export const resendToCollaborator = (id, collaboratorId) => async dispatch => {

  try {
     await axios.post(`/projects/resend/${id}/${collaboratorId}`);

  } catch (err) { 
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}  
  



//Delete Project
export const deleteProject = id => async dispatch => {
  try {
    await axios.delete(`/projects/delete/${id}`);

    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });

  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

