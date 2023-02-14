import React from "react";

const Employee = (props) => {
  console.log(props);
  // (destructuring)
  const { firstName, lastName, age } = props;

  return (
    <>
      <h6>
        Employee: {firstName} {lastName}. ({age} years old)
      </h6>
    </>
  );
};

export default Employee;
