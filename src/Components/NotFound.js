import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

const NotFound = (props) => {
  let history = useHistory();

  const backToHome = () => {
    props.handleClickReferrer();
    history.push("/");
  };

  return (
    <div>
      <h1>
        No search results! Please go to the{" "}
        <Link to="/" className="back-link" onClick={backToHome}>
          homepage
        </Link>{" "}
        for a new search!
      </h1>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
