import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
function Dashboard({ user }) {
  return (
    <div>
      {user && user.user && user.user.admin ? (
        <>
          <div className="bg-gray-100 py-8 ">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className=" relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="flex-1 min-w-0">
                    <a href="/add" className="focus:outline-none">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      <p className="text-center ext-sm font-medium text-gray-900">
                        Add new product
                      </p>
                    </a>
                  </div>
                </div>

                <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="flex-1 min-w-0">
                    <a href="/delete" className="focus:outline-none">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      <p className="text-center text-sm font-medium text-gray-900">
                        Delete Product
                      </p>
                    </a>
                  </div>
                </div>

                <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="flex-1 min-w-0">
                    <a href="/all" className="focus:outline-none">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      <p className="text-center text-sm font-medium text-gray-900">
                        Edit Products
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="text-center">
              <a
                href="/"
                className="text-center ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Homepage
              </a>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      ) : (
        <div className="mt-50 text-center ">
          <br />
          <br />
          <br />
          <h1 className="text-center text-4xl font-bold leading-7 text-gray-900 sm:leading-9">
            YOU ARE NOT AUTHORIZED TO VIEW THIS PAGE
          </h1>

          <button
            href="/"
            className="mt-10 text-center bg-green-500 text-white active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 inline-flex justify-center "
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Dashboard);
