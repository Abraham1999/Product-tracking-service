import React, { useState, useEffect } from "react";
import Axios from "axios";

function New(props) {
  const [NameValue, setNameValue] = useState("");
  const [TrackingValue, setTrackingValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [LocationValue, setLocationValue] = useState("");
  const [DateValue, setDateValue] = useState("");

  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value);
  };

  const onDateChange = (event) => {
    setDateValue(event.currentTarget.value);
  };

  const onTrackChange = (event) => {
    setTrackingValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onLocationChange = (event) => {
    setLocationValue(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !DateValue ||
      !NameValue ||
      !TrackingValue ||
      !DescriptionValue ||
      !LocationValue
    ) {
      return alert("fill all the fields first!");
    }

    const data = {
      name: NameValue,
      arrivalDate: DateValue,
      trackingId: TrackingValue,
      description: DescriptionValue,
      location: LocationValue,
    };

    Axios.post("/product", data).then((response) => {
      if (response.data) {
        alert("Product Successfully Added");
        props.history.push("/dashboard");
      } else {
        alert("Failed to add product");
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  const [User, setUser] = useState([]);

  const getUser = () => {
    Axios.get("/user/auth").then((response) => {
      if (response.data) {
        setUser(response.data);
      } else {
        alert("Failed to fetch data");
      }
    });
  };
  if (User && User.admin) {
    return (
      <div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            Product Information
          </h3>
          <form onSubmit={onSubmit}>
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
                    value={NameValue}
                    onChange={onNameChange}
                    type="text"
                    name="NameValue"
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
                    value={DescriptionValue}
                    onChange={onDescriptionChange}
                    type="text"
                    name="DescriptionValue"
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
                    value={LocationValue}
                    onChange={onLocationChange}
                    id="LocationValue"
                    name="LocationValue"
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
                    value={TrackingValue}
                    onChange={onTrackChange}
                    type="text"
                    name="TrackingValue"
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
                    value={DateValue}
                    onChange={onDateChange}
                    type="date"
                    name="DateValue"
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
                  onClick={onSubmit}
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

export default New;
