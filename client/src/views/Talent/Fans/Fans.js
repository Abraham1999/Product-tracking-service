import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../Dashboard/Navbar";
import FanList from "./FanList";
import { getCurrentTalentProfile } from "../../../redux/actions/talents";

const Fans = ({ getCurrentTalentProfile, talent: { talent } }) => {
  useEffect(() => {
    getCurrentTalentProfile();
  }, [getCurrentTalentProfile]);

  return (
    <>
      <Navbar />
      <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                Fan Page
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Details of fans associated with your account
              </p>

              <p className="mt-1 text-sm text-gray-500">
                You have {talent && talent[0] && talent[0].fans.length} fans on
                Gidilounge
              </p>
            </div>

            <div>
              <label
                htmlFor="project_name"
                className="block text-sm font-medium text-gray-700"
              >
                Search
              </label>
              <div className="mt-1">
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>

            <div className="space-y-2">
              <FanList talent={talent} />
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

Fans.propTypes = {
  getCurrentTalentProfile: PropTypes.func.isRequired,
  talent: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  talent: state.talent,
});

export default connect(mapStateToProps, { getCurrentTalentProfile })(Fans);
