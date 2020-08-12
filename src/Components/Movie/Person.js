import React from "react";
import PropTypes from "prop-types";

function Person(props) {
  const { person } = props;
  console.log(person);
  return <div>Person</div>;
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
