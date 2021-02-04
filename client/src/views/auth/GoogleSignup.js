import React from "react";
import GoogleLogin from "react-google-login";
import { googleLogin } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const GoogleSignUp = ({ googleLogin, isAuthenticated }) => {
  const responseGoogleSuccess = (response) => {
    let name = response.profileObj.name;
    let email = response.profileObj.email;

    if (response.profileObj) {
      googleLogin(email, name);
    }
  };

  const responseGoogleFailure = (response) => {
    console.log("error");
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="text-center">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID}
        buttonText="Sign up with Google"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        className="googleButton"
        prompt="select_account"
        cookiePolicy={'single_host_origin'}
        redirectUri="https://splitsheet.herokuapp.com/callback"
        
      />
    </div>
  );
};

GoogleSignUp.propTypes = {
  googleLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});
export default connect(mapStateToProps, { googleLogin })(GoogleSignUp);
