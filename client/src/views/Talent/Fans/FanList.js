import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const FanList = ({ talent }) => {
  return (
    <>
      <div className="bg-white py-6">
        <div
          className="max-w-2xl mx-auto sm:px-6 lg:px-8"
          style={{ height: "26rem" }}
        >
          <nav
            className="relative h-full overflow-y-auto"
            aria-label="Directory"
          >
            {talent &&
              talent[0] &&
              talent[0].fans.map((item, index) => {
                if (item.name.charAt(0) === "A" || item.name.charAt(0) === "a" ) {
                  return (
                    <>
                      <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                        <h3>A</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "B" || item.name.charAt(0) === "b") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>B</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "C" || item.name.charAt(0) === "c" ) {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>C</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "D" || item.name.charAt(0) === "d") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>D</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "E" || item.name.charAt(0) === "e") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>E</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "F" || item.name.charAt(0) === "f") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>F</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "G" || item.name.charAt(0) === "g") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>G</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "H" || item.name.charAt(0) === "h") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>H</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "I" || item.name.charAt(0) === "i") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>I</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "J" || item.name.charAt(0) === "j") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>J</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "K" || item.name.charAt(0) === "k") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>K</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "L" || item.name.charAt(0) === "l") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>L</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "M" || item.name.charAt(0) === "m") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>M</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "N" || item.name.charAt(0) === "n") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>N</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "O" || item.name.charAt(0) === "o") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>O</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "P" || item.name.charAt(0) === "p") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>P</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "Q" || item.name.charAt(0) === "q") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>Q</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "R" || item.name.charAt(0) === "r") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>R</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "S" || item.name.charAt(0) === "s") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>S</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "T" || item.name.charAt(0) === "t") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>T</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "U" || item.name.charAt(0) === "u") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>U</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "V" || item.name.charAt(0) === "v") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>V</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "W" || item.name.charAt(0) === "w") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>W</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "X" || item.name.charAt(0) === "x") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>X</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "Y" || item.name.charAt(0) === "y") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>Y</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }

                if (item.name.charAt(0) === "Z" || item.name.charAt(0) === "z") {
                  return (
                    <>
                      <div
                        className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                        key={index}
                      >
                        <h3>Z</h3>
                      </div>
                      <ul className="relative z-0 divide-y divide-gray-200">
                        <li className="bg-white">
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.avatar}
                                alt="email"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="/" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.email}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }
              })}
          </nav>
        </div>
      </div>
    </>
  );
};

FanList.propTypes = {
  // talent: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, null)(FanList);
