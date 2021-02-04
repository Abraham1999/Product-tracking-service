import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import draftToHtml from "draftjs-to-html";

const Collaborator = ({ project }) => {
  return (
    <>
      <Scrollbars style={{ height: 500 }}>
        <div
          dangerouslySetInnerHTML={{
            __html: draftToHtml(JSON.parse(project[0].description)),
          }}
        ></div>
      </Scrollbars>
    </>
  );
};

export default Collaborator;
