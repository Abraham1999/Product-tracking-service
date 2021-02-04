import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTalentById } from "../../../redux/actions/talents";
import Spinner from "../../../utils/Spinner";
import TalentView from "./Talent";
import Footer from "components/Footers/Footer";
import Navbar from "../LandingSections/Navbar";

const Talent = ({
    getTalentById,
  talent: { talent, loading },
  match,
}) => {
  useEffect(() => {
    getTalentById(match.params.id);
  }, [getTalentById, match.params.id]);

  return loading || talent === null ? (
    <Spinner />
  ) : (
    <>
          <Navbar />
          <br />
      <div className="bg-gray-100">    
          <div className="container mx-auto px-8 bg-white overflow-hidden shadow-xl rounded-lg">
            <TalentView talent={talent} />
          </div>
         
      </div>
      <Footer />
    </>
  );
};

Talent.propTypes = {
  getTalentById: PropTypes.func.isRequired,
  talent: PropTypes.object.isRequired,
 };
const mapStateToProps = (state) => ({
  talent: state.talent,
 });

export default connect(mapStateToProps, {
    getTalentById,
})(Talent);
