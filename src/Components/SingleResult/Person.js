import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import noPhotoFound from "../../images/noPhotoFound.png";

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
      <Link className="back result" to="/result" title="Back to Results">
        &laquo; <FontAwesomeIcon icon={faClipboardList} />
      </Link>
      <Link className="back" to="/" onClick={backToHome} title="Back to Home">
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="content" id="specificPerson">
        <h2 className="person-name">{apiData.name}</h2>
        <div>
          <div>
            <img
              src={
                apiData.profile_path === null
                  ? `${noPhotoFound}`
                  : `${secure_url}w500${apiData.profile_path}`
              }
              alt={apiData.name}
            />
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
                <p className="bold">Biography:</p>
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
  handleClickReferrer: PropTypes.func.isRequired,
};

export default Person;
