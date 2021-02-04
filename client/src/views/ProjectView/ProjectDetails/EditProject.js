import React, { Component } from "react";
import axios from "axios";
export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      recordingTitle: "",
      recordingArtist: "",
      stateOfLaw: "",
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
      .get("/projects/" + this.props.props)
      .then((res) => {
        this.setState({
          name: res.data.name,
          recordingTitle: res.data.recordingTitle,
          recordingArtist: res.data.recordingArtist,
          stateOfLaw: res.data.stateOfLaw,
        });
      })
      .catch((err) => console.log(err));
  }

  onChangeProjectName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeTitle = (e) => {
    this.setState({
      recordingTitle: e.target.value,
    });
  };

  onChangeArtist = (e) => {
    this.setState({
      recordingArtist: e.target.value,
    });
  };

  onChangeStateOfLaw = (e) => {
    this.setState({
      stateOfLaw: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      recordingTitle: this.state.recordingTitle,
      recordingArtist: this.state.recordingArtist,
      stateOfLaw: this.state.stateOfLaw,
    };
    axios
      .post("/projects/updateProject/" + this.props.props, data)
      .then((res) => console.log("Successful"));
  };

  render() {
    return (
      <div>
     
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
                        Project updated Successfully
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
          </div>
          </>
          ) : null}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Project name"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.onChangeProjectName}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="recordingTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Recording Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Recording Title"
                name="recordingTitle"
                id="recordingTitle"
                value={this.state.recordingTitle}
                onChange={this.onChangeTitle}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="recordingArtist"
              className="block text-sm font-medium text-gray-700"
            >
              Recording Artist
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Recording Artist"
                name="recordingArtist"
                value={this.state.recordingArtist}
                onChange={this.onChangeArtist}
                id="recordingArtist"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <label
            htmlFor="stateOfLaw"
            className="block text-sm font-medium text-gray-700"
          >
            State of Law
          </label>
          <input
            type="text"
            placeholder="State of Law"
            name="stateOfLaw"
            value={this.state.stateOfLaw}
            onChange={this.onChangeStateOfLaw}
            id="stateOfLaw"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <div className="mt-2">
            <button
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              type="submit"
              onClick={this.setAlert}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}
