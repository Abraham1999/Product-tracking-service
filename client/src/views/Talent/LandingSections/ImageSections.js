import React from "react";
import { Link } from "react-router-dom";

const ImageSection = (props) => {

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Actors
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Actor" ? (
                    <>
                      <div className="space-y-4">
                      <Link to={`/${item._id}`}>
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div> 

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                        </Link>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Musicians
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Musician" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Comedians
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Comedian" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Content creators
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Creator" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Athletes
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Athlete" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Reality TV
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Reality TV" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Producers
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Producer" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Djs
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Dj" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Public Figures
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Public Figures" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Politicians
              </h2>
            </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              data-todo-x-max="1"
            >
              {props.props.map((item, index) => (
                <li key={index}>
                  {item.category === "Politicians" ? (
                    <>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={item.images[0].url}
                            alt="talent"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{item.name}</h3>
                            <p className="text-indigo-600">{item.category}</p>
                            <p className="text-indigo-600">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
