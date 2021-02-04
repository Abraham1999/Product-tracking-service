import React, { Component } from "react";
import axios from "axios";

import FileUpload from "./FileUpload";

export default class EditPerfume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      category: "",
      bio: "",
      responseTime: "",
      images: "",
    };
  }

  componentDidMount() {
    axios
      .get("/talent/profile")
      .then((res) => {
        console.log(res);
        this.setState({
          price: res.data.price,
          category: res.data.category,
          bio: res.data.bio,
          responseTime: res.data.responseTime,
          images: res.data.images,
        });
      })
      .catch((err) => console.log(err));
  }

  onChangeBio = (e) => {
    this.setState({
      bio: e.target.value,
    });
  };

  onChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  onChangeResponseTime = (e) => {
    this.setState({
      responseTime: e.target.value,
    });
  };

  onChangeCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onChangeImages = (e) => {
    this.setState({
      images: e,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      price: this.state.price,
      category: this.state.category,
      bio: this.state.bio,
      responseTime: this.state.responseTime,
      images: this.state.images,
    };
    axios.post("/talent", data).then((res) => console.log("Successful"));
  };

  render() {
    return (
      <>
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <form onSubmit={this.onSubmit}>
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Profile
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        This information will be displayed publicly so your fans
                        can request for shoutouts.
                      </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="space-y-6">
                        <div>
                          <label
                            htmlFor="bio"
                            className="block text-sm font-medium text-gray-700"
                          >
                            About
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="bio"
                              name="bio"
                              rows="3"
                              value={this.state.bio}
                              onChange={this.onChangeBio}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="bio"
                            ></textarea>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description for your profile. URLs are
                            hyperlinked.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Talent Category
                          </label>
                          <select
                            type="text"
                            name="price"
                            id="category"
                            onChange={this.onChangeCategory}
                            value={this.state.category}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            >
                            <option value="0">Select category</option>
                            <option value="Musician">Musician</option>       
                            <option value="Actor">Actor</option>
                            <option value="Comedian">Comedian</option>
                            <option value="Creator">Creator</option>
                            <option value="Athlete">Athlete</option>
                            <option value="Reality TV">Reality TV</option>
                            <option value="Producer">Producer</option>
                            <option value="Dj">Dj</option>
                            <option value="Public Figure">Public Figure</option>
                            <option value="Politician">Politician</option>
                          </select>
                        </div>
 
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Price for shoutouts
                          </label>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            onChange={this.onChangePrice}
                            value={this.state.price}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="responseTime"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Response time
                          </label>
                          <input
                            type="text"
                            name="responseTime"
                            id="responseTime"
                            onChange={this.onChangeResponseTime}
                            value={this.state.responseTime}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Photo
                          </label>
                          <div className="mt-2 flex items-center space-x-5">
                            <img
                              className="inline-block h-14 w-14 rounded-full"
                              src={
                                this.state.images && this.state.images[0].url
                              }
                              alt=""
                            />
                            <button
                              type="button"
                              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Change
                            </button>
                          </div>
                        </div>

                        <>
                          <FileUpload refreshFunction={this.onChangeImages} />
                        </>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
