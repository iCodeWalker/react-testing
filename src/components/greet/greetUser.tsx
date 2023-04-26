import React from "react";

type GreetProps = {
  name?: string;
};

const GreetUser = (props: GreetProps) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
};
export default GreetUser;
