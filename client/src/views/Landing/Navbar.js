// import React from "react";
// import { useSelector } from "react-redux";
// import { logout } from "../../redux/actions/auth";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const Navbar = ({ logout }) => {
//   const [isOpen, toggleSidebar] = React.useState(true);

//   const user = useSelector((state) => state.user);

//   if (user && user.user && user.user.admin === true) {
//     return (
//       <>
//         <div>
//           <nav data-todo-x-data="{ open: false }">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-between h-16">
//                 <div className="flex">
//                   <div className="-ml-2 mr-2 flex items-center md:hidden">
//                     {/* Mobile menu button */}
//                     <button
//                       data-todo-at-click="open = !open"
//                       className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                       data-todo-x-bind-aria-expanded="open"
//                       aria-expanded="false"
//                       onClick={() => toggleSidebar(!isOpen)}
//                     >
//                       <span className="sr-only">Open main menu</span>
//                       {/* Icon when menu is closed. */}
//                       <svg
//                         data-todo-x-state-on="Menu open"
//                         data-todo-x-state-off="Menu closed"
//                         className="block h-6 w-6"
//                         data-todo-x-description="Heroicon name: menu"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M4 6h16M4 12h16M4 18h16"
//                         ></path>
//                       </svg>
//                       {/* Icon when menu is open. */}
//                       <svg
//                         data-todo-x-state-on="Menu open"
//                         data-todo-x-state-off="Menu closed"
//                         className="hidden h-6 w-6"
//                         data-todo-x-description="Heroicon name: x"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M6 18L18 6M6 6l12 12"
//                         ></path>
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex-shrink-0 flex items-center">
//                     <h3 className="text-sm font-semibold">
//                       <a href="/" className="">
//                         {" "}
//                         Global Delivery Company
//                       </a>
//                     </h3>
//                   </div>
//                   <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
//                     <a
//                       href="/"
//                       className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Home
//                     </a>
//                     <a
//                       href="/dashboard"
//                       className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Dashboard
//                     </a>
//                     <a
//                       href="/"
//                       onClick={logout}
//                       className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Logout
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               data-todo-x-description="Mobile menu, toggle classes based on menu state."
//               data-todo-x-state-on="Menu open"
//               data-todo-x-state-off="Menu closed"
//               className={`
//               transform ${isOpen ? "     hidden md:hidden" : ""}`}
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a
//                   href="/"
//                   className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/dashboard"
//                   className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Dashboard
//                 </a>
//                 <a
//                   href="/"
//                   onClick={logout}
//                   className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Logout
//                 </a>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </>
//     );
//   }
//   if (user && user.user && user.user.admin === false) {
//     return (
//       <>
//         <div>
//           <nav data-todo-x-data="{ open: false }">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-between h-16">
//                 <div className="flex">
//                   <div className="-ml-2 mr-2 flex items-center md:hidden">
//                     {/* Mobile menu button */}
//                     <button
//                       data-todo-at-click="open = !open"
//                       className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                       data-todo-x-bind-aria-expanded="open"
//                       aria-expanded="false"
//                       onClick={() => toggleSidebar(!isOpen)}
//                     >
//                       <span className="sr-only">Open main menu</span>
//                       {/* Icon when menu is closed. */}
//                       <svg
//                         data-todo-x-state-on="Menu open"
//                         data-todo-x-state-off="Menu closed"
//                         className="block h-6 w-6"
//                         data-todo-x-description="Heroicon name: menu"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M4 6h16M4 12h16M4 18h16"
//                         ></path>
//                       </svg>
//                       {/* Icon when menu is open. */}
//                       <svg
//                         data-todo-x-state-on="Menu open"
//                         data-todo-x-state-off="Menu closed"
//                         className="hidden h-6 w-6"
//                         data-todo-x-description="Heroicon name: x"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M6 18L18 6M6 6l12 12"
//                         ></path>
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex-shrink-0 flex items-center">
//                     <h3 className="text-sm font-semibold">
//                       <a href="/" className="">
//                         {" "}
//                         Global Delivery Company
//                       </a>
//                     </h3>
//                   </div>
//                   <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
//                     <a
//                       href="/"
//                       className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Home
//                     </a>
//                     <a
//                       href="/"
//                       onClick={logout}
//                       className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Logout
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               data-todo-x-description="Mobile menu, toggle classes based on menu state."
//               data-todo-x-state-on="Menu open"
//               data-todo-x-state-off="Menu closed"
//               className={`
//           transform ${isOpen ? "     hidden md:hidden" : ""}`}
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a
//                   href="/"
//                   className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/"
//                   onClick={logout}
//                   className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Logout
//                 </a>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div>
//           <nav data-todo-x-data="{ open: false }">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-between h-16">
//                 <div className="flex">
//                   <div className="-ml-2 mr-2 flex items-center md:hidden">
//                     {/* Mobile menu button */}
//                     <button
//                       data-todo-at-click="open = !open"
//                       className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                       data-todo-x-bind-aria-expanded="open"
//                       aria-expanded="false"
//                       onClick={() => toggleSidebar(!isOpen)}
//                     >
//                       <span className="sr-only">Open main menu</span>
//                       {/* Icon when menu is closed. */}
//                       <svg
//                         data-todo-x-state-on="Menu open"
//                         data-todo-x-state-off="Menu closed"
//                         className="block h-6 w-6"
//                         data-todo-x-description="Heroicon name: menu"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M4 6h16M4 12h16M4 18h16"
//                         ></path>
//                       </svg>
//                       {/* Icon when menu is open. */}
//                       <svg
//                         data-todo-x-state-on="Menu open"
//                         data-todo-x-state-off="Menu closed"
//                         className="hidden h-6 w-6"
//                         data-todo-x-description="Heroicon name: x"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M6 18L18 6M6 6l12 12"
//                         ></path>
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex-shrink-0 flex items-center">
//                     <h3 className="text-sm font-semibold">
//                       <a href="/" className="">
//                         {" "}
//                         Global Delivery Company
//                       </a>
//                     </h3>
//                   </div>
//                   <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
//                     <a
//                       href="/"
//                       className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Home
//                     </a>
//                     <a
//                       href="/register-page"
//                       className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Register
//                     </a>
//                     <a
//                       href="/login-page"
//                       className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Login
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               data-todo-x-description="Mobile menu, toggle classes based on menu state."
//               data-todo-x-state-on="Menu open"
//               data-todo-x-state-off="Menu closed"
//               className={`
//               transform ${isOpen ? "     hidden md:hidden" : ""}`}
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a
//                   href="/"
//                   className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/register-page"
//                   className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Register
//                 </a>
//                 <a
//                   href="/login-page"
//                   className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Login
//                 </a>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </>
//     );
//   }
// };

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
// };

// export default connect(null, { logout })(Navbar);

import React, { useState, useEffect } from "react";
import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Axios from "axios";

const Navbar = ({ logout }) => {
  const [isOpen, toggleSidebar] = React.useState(true);

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

  if (User.admin === true) {
    return (
      <>
        <div>
          <nav data-todo-x-data="{ open: false }">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <button
                      data-todo-at-click="open = !open"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      data-todo-x-bind-aria-expanded="open"
                      aria-expanded="false"
                      onClick={() => toggleSidebar(!isOpen)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {/* Icon when menu is closed. */}
                      <svg
                        data-todo-x-state-on="Menu open"
                        data-todo-x-state-off="Menu closed"
                        className="block h-6 w-6"
                        data-todo-x-description="Heroicon name: menu"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                      {/* Icon when menu is open. */}
                      <svg
                        data-todo-x-state-on="Menu open"
                        data-todo-x-state-off="Menu closed"
                        className="hidden h-6 w-6"
                        data-todo-x-description="Heroicon name: x"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <h3 className="text-sm font-semibold">
                      <a href="/" className="">
                        {" "}
                        Global Delivery Company
                      </a>
                    </h3>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    <a
                      href="/"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="/dashboard"
                      className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </a>
                    <a
                      href="/"
                      onClick={logout}
                      className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-todo-x-description="Mobile menu, toggle classes based on menu state."
              data-todo-x-state-on="Menu open"
              data-todo-x-state-off="Menu closed"
              className={`
              transform ${isOpen ? "     hidden md:hidden" : ""}`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/dashboard"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="/"
                  onClick={logout}
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
  if (User.admin === false) {
    return (
      <>
        <div>
          <nav data-todo-x-data="{ open: false }">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <button
                      data-todo-at-click="open = !open"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      data-todo-x-bind-aria-expanded="open"
                      aria-expanded="false"
                      onClick={() => toggleSidebar(!isOpen)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {/* Icon when menu is closed. */}
                      <svg
                        data-todo-x-state-on="Menu open"
                        data-todo-x-state-off="Menu closed"
                        className="block h-6 w-6"
                        data-todo-x-description="Heroicon name: menu"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                      {/* Icon when menu is open. */}
                      <svg
                        data-todo-x-state-on="Menu open"
                        data-todo-x-state-off="Menu closed"
                        className="hidden h-6 w-6"
                        data-todo-x-description="Heroicon name: x"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <h3 className="text-sm font-semibold">
                      <a href="/" className="">
                        {" "}
                        Global Delivery Company
                      </a>
                    </h3>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    <a
                      href="/"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="/"
                      onClick={logout}
                      className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-todo-x-description="Mobile menu, toggle classes based on menu state."
              data-todo-x-state-on="Menu open"
              data-todo-x-state-off="Menu closed"
              className={`
          transform ${isOpen ? "     hidden md:hidden" : ""}`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/"
                  onClick={logout}
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <nav data-todo-x-data="{ open: false }">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <button
                      data-todo-at-click="open = !open"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      data-todo-x-bind-aria-expanded="open"
                      aria-expanded="false"
                      onClick={() => toggleSidebar(!isOpen)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {/* Icon when menu is closed. */}
                      <svg
                        data-todo-x-state-on="Menu open"
                        data-todo-x-state-off="Menu closed"
                        className="block h-6 w-6"
                        data-todo-x-description="Heroicon name: menu"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                      {/* Icon when menu is open. */}
                      <svg
                        data-todo-x-state-on="Menu open"
                        data-todo-x-state-off="Menu closed"
                        className="hidden h-6 w-6"
                        data-todo-x-description="Heroicon name: x"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <h3 className="text-sm font-semibold">
                      <a href="/" className="">
                        {" "}
                        Global Delivery Company
                      </a>
                    </h3>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    <a
                      href="/"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="/register-page"
                      className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </a>
                    <a
                      href="/login-page"
                      className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-todo-x-description="Mobile menu, toggle classes based on menu state."
              data-todo-x-state-on="Menu open"
              data-todo-x-state-off="Menu closed"
              className={`
              transform ${isOpen ? "     hidden md:hidden" : ""}`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/register-page"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Register
                </a>
                <a
                  href="/login-page"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </a>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Navbar);
