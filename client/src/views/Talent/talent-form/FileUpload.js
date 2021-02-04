import React, { useState } from 'react'
import Axios from "axios";
import Dropzone from 'react-dropzone';

const FileUpload = (props) => {
    const [Images, setImages] = useState([])

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    //save the Image we chose inside the Node Server
    Axios.post("/image/cloudinary/upload/single", formData, config).then(
      (response) => {
        if (response.data.success) {
          setImages([...Images, response.data.image.url]);
          props.refreshFunction([...Images, response.data.image]);
        } else {
          alert("Failed to save the Image in Server");
        }
      }
    );
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Cover photo
      </label>
      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload a file</span>
              <Dropzone
                onDrop={onDrop}
                multiple={false}
                 maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                     <div
                     //style={{
                    //     width: '300px', height: '240px', border: '1px solid lightgray',
                    //     display: 'flex', alignItems: 'center', justifyContent: 'center'
                    // }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()}
                         id="file-upload"
                        //  name="file-upload"
                        //  type="file"
                         className="sr-only"
                        />

                    </div>
                )}
            </Dropzone>
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
};
export default FileUpload;






// import React, { useState } from "react";
// import Axios from "axios";
// import Dropzone from "react-dropzone";

// const FileUpload = (props) => {
//   const [Images, setImages] = useState([]);
//   console.log(props)

//   const onDrop = (files) => {
//     let formData = new FormData();
//     const config = {
//       header: { "content-type": "multipart/form-data" },
//     };
//     formData.append("file", files[0]);
//     //save the Image we chose inside the Node Server
//     Axios.post("/image/cloudinary/upload/single", formData, config).then(
//       (response) => {
//         if (response.data.success) {
//           setImages([...Images, response.data.image.url]);
//           props.refreshFunction = response.data.image.url
//           // props.refreshFunction([...Images, response.data.image]);
//         } else {
//           alert("Failed to save the Image in Server");
//         }
//       }
//     );
//   };

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Cover photo
//       </label>
//       <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//         <div className="space-y-1 text-center">
//           <svg
//             className="mx-auto h-12 w-12 text-gray-400"
//             stroke="currentColor"
//             fill="none"
//             viewBox="0 0 48 48"
//             aria-hidden="true"
//           >
//             <path
//               d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             ></path>
//           </svg>
//           <div className="flex text-sm text-gray-600">
//             <label
//               htmlFor="file-upload"
//               className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//             >
//               <span>Upload a file</span>
//               <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
//                 {({ getRootProps, getInputProps }) => (
//                   <div
//                     //style={{
//                     //     width: '300px', height: '240px', border: '1px solid lightgray',
//                     //     display: 'flex', alignItems: 'center', justifyContent: 'center'
//                     // }}
//                     {...getRootProps()}
//                   >
//                     <input
//                       {...getInputProps()}
//                       id="file-upload"
//                       //  name="file-upload"
//                       //  type="file"
//                       className="sr-only"
//                     />
//                   </div>
//                 )}
//               </Dropzone>
//             </label>
//             <p className="pl-1">or drag and drop</p>
//           </div>
//           <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FileUpload;
