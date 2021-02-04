import React, { useState } from "react";
import { connect } from "react-redux";
import { addFan } from "../../../redux/actions/talents";
import PropTypes from "prop-types";
import Axios from "axios";

const TalentView = ({
  talent: { _id, name, images, category, price, bio, responseTime },
  addFan,
}) => {
  const onSubmit = (e) => {
    addFan(_id);

    const data = {
      id: _id,
    };
    Axios.post(`/talent/stars/`, data).then((response) => {
      if (response.data) {
        console.log("Successful");
      } else {
        console.log("Failed to save post");
      }
    });

    window.location.reload();
  };

  return (
    <>
     

      <div className="max-w-3xl mx-auto">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <svg
                    className="flex-shrink-0 h-5 w-5"
                    data-todo-x-description="Heroicon name: home"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  data-todo-x-description="Heroicon name: chevron-right"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="/"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Category
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  data-todo-x-description="Heroicon name: chevron-right"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="/"
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {category}
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <img
                className="inline-block h-40 w-40 rounded-full"
                src={images[0].url}
                alt="profile"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">{name}</h4>
              <p className="mt-1">{category}</p>
              <p className="mt-1">{bio}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-40 max-w-3xl mx-auto">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-full border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Request ${price}
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mt-10 sm:mt-40 max-w-3xl mx-auto">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-full border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={onSubmit}
            >
              Be a fan
            </button>
          </div>
        </form>

        <div className="">
          <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-indigo-600">
                    Derek Lamar
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>January 27th, 2021</p>
                    <p>Shoutout was awesome, thanks for the video Mike Dee</p>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-indigo-600">
                    Derek Lamar
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>January 27th, 2021</p>
                    <p>Shoutout was awesome, thanks for the video Mike Dee</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-indigo-600">
                    Derek Lamar
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>January 27th, 2021</p>
                    <p>Shoutout was awesome, thanks for the video Mike Dee</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-indigo-600">
                    Derek Lamar
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>January 27th, 2021</p>
                    <p>Shoutout was awesome, thanks for the video Mike Dee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TalentView.propTypes = {
  talent: PropTypes.object.isRequired,
  addFan: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { addFan })(TalentView);
