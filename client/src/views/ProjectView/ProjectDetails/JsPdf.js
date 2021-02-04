import React from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import draftToHtml from "draftjs-to-html";

const PdfTemplate = (props) => {

  const Prints = () => {
    return (
      <div style={{ marginLeft: "300" }}>
        <div
          dangerouslySetInnerHTML={{
            __html: draftToHtml(JSON.parse(props.props.description)),
          }}
        ></div>

        {/* <div
          dangerouslySetInnerHTML={{
            __html: props.props.descriptionToHTML[0],
          }}
        ></div> */}
      </div>
    );
  };
  const print = () => {
    const string = renderToString(<Prints />);
    // const pdf = new jsPDF("p", "mm", "a4");

    // pdf.fromHTML(string);

    // pdf.save("pdf");

    const pdf = new jsPDF("p", "pt", "a4", true),
      margins = {
        top: 40,
        bottom: 60,
        left: 20,
        right: 20,
      };
    let a4Width = Number(pdf.internal.pageSize.getWidth()); //page width is now based on the orientation

    pdf.fromHTML(string, margins.left, margins.right, {
      pagesplit: true,
      width: 540,
    });

    pdf.save("pdf");
  };
  return (
    <div className="text-center">
      <button 
                className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"

      onClick={print}> Download Pdf</button>
    </div> 
  );
};
export default PdfTemplate;
