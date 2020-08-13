import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPoll } from "@fortawesome/free-solid-svg-icons";

function Person(props) {
  const { person, handleClickReferrer } = props;
  const apiData = person.apiData;
  const secure_url = person.imagesUrl;
  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  return (
    <React.Fragment>
      <Link className="back result" to="/result">
        &laquo; <FontAwesomeIcon icon={faPoll} />
      </Link>
      <Link className="back" to="/" onClick={backToHome}>
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="content" id="specificPerson">
        <h2 className="person-name">{apiData.name}</h2>
        <div>
          <div>
            {apiData.profile_path !== null && (
              <img
                src={`${secure_url}w500${apiData.profile_path}`}
                alt={apiData.name}
              />
            )}
          </div>
          <div className="more-info">
            <time className="bold" datatype={apiData.birthday}>
              Birthday: {apiData.birthday}
            </time>
            {apiData.deathday !== null && (
              <time className="bold" datatype={apiData.deathday}>
                Deathday: {apiData.deathday}
              </time>
            )}
            <p className="bold" datatype={apiData.known_for_department}>
              Known for department: {apiData.known_for_department}
            </p>
            <p className="bold" datatype={apiData.place_of_birth}>
              Place of birth: {apiData.place_of_birth}
            </p>
            {apiData.homepage !== null && apiData.homepage.length > 0 && (
              <a className="bold" href={apiData.homepage}>
                {apiData.name}
              </a>
            )}
            {apiData.biography !== null && (
              <div>
                <p>Biography:</p>
                <span>{apiData.biography}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
