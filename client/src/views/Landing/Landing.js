import React, { useState } from "react";
import Axios from "axios";
import Navbar from "./Navbar";

const Landing = () => {
  const [TrackingValue, setTrackingValue] = useState("");
  const [Product, setProduct] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onTrackChange = (event) => {
    setTrackingValue(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!TrackingValue) {
      return alert("fill add a tracking number before submitting");
    }

    const data = {
      trackingId: TrackingValue,
    };

    Axios.post("/product/tracking", data).then((response) => {
      if (response.data) {
        setProduct(response.data);
        setShowModal(true);
      } else {
        alert(
          "There seems to be a problem with the tracking number, please ensure it is the correct number given to you"
        );
      }
    });
  };

   return (
    <>
      <Navbar />

      {showModal ? (
        <>
          <div
            className="fixed z-10 inset-0 overflow-y-auto"
            style={{ height: "560px" }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-2xl pt-20 px-4 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Package Details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <ul className="divide-y divide-gray-200" data-todo-x-max="1">
                    <li className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">
                              Package Name
                            </h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            {Product.name}
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">Description</h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            {Product.description}
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">
                              Current Location
                            </h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            {Product.location}
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">
                              Arrival Date
                            </h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            {Product.arrivalDate}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  ></rect>
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              ></rect>
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  ></rect>
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              ></rect>
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <rect
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  ></rect>
                </rect>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tracking My Parcel
              </span>
              <br />
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Find all your packages En Route to your location
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Our platform makes it easy to track the status of your package,
              when you input your tracking number, you get the most recent
              information about the package.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Track package</h2>
           
            <div className="mt-12">
              <form onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="Tracking"
                    className="block text-sm font-medium text-gray-700 pb-4"
                  >
                    Tracking Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="TrackingValue"
                      id="Tracking"
                      autoComplete=""
                      value={TrackingValue}
                      onChange={onTrackChange}
                      placeholder="Enter tracking number"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <br />
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Track
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <hr  className="container"/>
        <br />
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                Home
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="/login-page"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Login
              </a>
            </div> 

            <div className="px-5 py-2">
              <a
                href="/register-page"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Register
              </a>
            </div>

           
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
          © 2021 Global Delivery Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Landing;
