import React, { useState } from "react";
import Axios from "axios";
import FileUpload from "./FileUpload";
const AddTalent = (props) => {
  const [PriceValue, setPriceValue] = useState("");
  const [Images, setImages] = useState([]);
  const [CategoryValue, setCategoryValue] = useState("");
  const [BioValue, setBioValue] = useState("");
  const [ResponseTimeValue, setResponseTimeValue] = useState("");

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };
  const onCategoryChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };
  const onBioChange = (event) => {
    setBioValue(event.currentTarget.value);
  };
  const onResponseChange = (event) => {
    setResponseTimeValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !PriceValue ||
      !Images ||
      !CategoryValue ||
      !BioValue ||
      !ResponseTimeValue
    ) {
      return alert("fill all the fields first!");
    }

    const data = {
      category: CategoryValue,
      bio: BioValue,
      responseTime: ResponseTimeValue,
      price: PriceValue,
      images: Images,
    };

    Axios.post("/talent", data).then((response) => {
      if (response.data) {
        props.history.push("/dashboard");
      } else {
        alert("Error");
      }
    });
  };
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <form onSubmit={onSubmit}>
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
                            name="BioValue"
                            rows="3"
                            onChange={onBioChange}
                            value={BioValue}
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
                          id="category"
                          name="CategoryValue"
                          autocomplete="category"
                          onChange={onCategoryChange}
                          value={CategoryValue}
                          class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
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
                          name="PriceValue"
                          id="price"
                          onChange={onPriceChange}
                          value={PriceValue}
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
                          onChange={onResponseChange}
                          value={ResponseTimeValue}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <>
                        <FileUpload refreshFunction={updateImages} />
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
};

export default AddTalent;