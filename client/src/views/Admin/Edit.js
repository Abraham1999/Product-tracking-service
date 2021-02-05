import React, { Component } from "react";
import axios from "axios";


export default class EditPerfume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      location: "",
      trackingId: "",
      arrivalDate: "",
      modal: false,
      visible: false,
    };
  }

  setModal = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  setAlert = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  componentDidMount() {
    axios
      .get("/product/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          description: res.data.description,
          location: res.data.location,
          trackingId: res.data.trackingId,
          arrivalDate: res.data.arrivalDate,
        });
      })
      .catch((err) => console.log(err));

    axios.get(`/user/auth`).then((res) => {
      const user = res.data;
      this.setState({ user });
    });
  }


  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  onChangeTrackingId = (e) => {
    this.setState({
      trackingId: e.target.value,
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangeArrivalDate = (e) => {
    this.setState({
      arrivalDate: e.target.value,
    });
  };


  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      trackingId: this.state.trackingId,
      arrivalDate: this.state.arrivalDate,
    };
    axios
      .post("/product/edit/" + this.props.match.params.id, data)
      .then((res) => console.log("Successful"));
  };

  render() {
    if (this.state.user && this.state.user.admin) {
      return (
        <div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            Product Information
          </h3>
          <form onSubmit={this.onSubmit}>
          {this.state.visible ? (
          <>
          <div>
            <div className="max-w-7xl mx-auto mt-3 mb-5">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        data-todo-x-description="Heroicon name: check-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Product updated Successfully
                      </p>
                    </div>
                    <div className="ml-auto pl-3">
                      <div className="-mx-1.5 -my-1.5">
                        <button  onClick={() => this.setAlert(false)} className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                          <span className="sr-only">Dismiss</span>
                          <svg
                            className="h-5 w-5"
                            data-todo-x-description="Heroicon name: x"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
          </>
          ) : null}

            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="_name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Product Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    value={this.state.name}
                    onChange={this.onChangeName}
                    type="text"
                    name="name"
                    id="_name"
                    autoComplete=""
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="DescriptionValue"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Description
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    type="text"
                    name="description"
                    id="DescriptionValue"
                    autoComplete=""
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="LocationValue"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Current Location
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                   value={this.state.location}
                   onChange={this.onChangeLocation}
                    id="LocationValue"
                    name="location"
                    type="text"
                    autoComplete=""
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="TrackingValue"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Tracking Number
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    name="trackingId"
                    value={this.state.trackingId}
                    onChange={this.onChangeTrackingId}
                    type="text"
                    id="TrackingValue"
                    autoComplete=""
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="DateValue"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Arrival Date
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    value={this.state.arrivalDate}
                    onChange={this.onChangeArrivalDate}
                    type="date"
                    name="arrivalDate"
                    id="DateValue"
                    autoComplete=""
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <br />
            <div className="pt-5">
              <div className="flex justify-end">
                <a
                  href="/dashboard"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </a>
                <button
                  type="submit"
                  onClick={this.setAlert}
                  // onClick={this.onSubmit}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      );
    } else {
      return (
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
      );
    }
  }
}
