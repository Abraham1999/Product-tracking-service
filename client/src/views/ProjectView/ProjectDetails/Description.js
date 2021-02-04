import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { addProjectDescription } from "../../../redux/actions/project";
import { Form } from "reactstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import Axios from "axios";

function ProjectDescription({ project: { description, _id } }) {
  const dispatch = useDispatch();
  const editorContent = description
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(description)))
    : // ? EditorState.createWithContent(convertFromRaw(JSON.parse(description[0].blocks[0].text)))
      EditorState.createEmpty();

  const [editorState, setEditorState] = useState({
    editorState: editorContent,
  });


  const handleEditorChange = (editorState) => {
    setEditorState({ editorState });
  };

  const onSubmit = (e) => {
    const newPost = {
      description: JSON.stringify(
        convertToRaw(editorState.editorState.getCurrentContent())
      ),
    };
    dispatch(addProjectDescription(_id, newPost));

    const data = convertToHTML(editorState.editorState.getCurrentContent());


    const htmlData = {
      descriptionToHTML: data,
    };

    Axios.post(`/projects/description/html/${_id}`, htmlData).then(
      (response) => {
        if (response.data) {
          console.log("Success");
        } else {
          console.log("Error");
        }
      }
    );
  };


  return (
    <>
      <Form onSubmit={onSubmit}>
        <Editor
          editorState={editorState.editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
        />

        <div style={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <br />

          <button type="submit" htmltype="submit"
                    className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded shadow-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    >
            SAVE
          </button>
        
        </div>
        <br />
      </Form>

    </>
  );
}

ProjectDescription.propTypes = {
  project: PropTypes.object.isRequired,
};

// function PlainView(props) {
//   return (
//     <>
//       <div dangerouslySetInnerHTML={{ __html: props.data }}></div>
//     </>
//   );
// }

export default ProjectDescription;
