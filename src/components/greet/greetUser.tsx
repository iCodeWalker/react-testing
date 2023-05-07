import React from 'react';
import { GreetProps } from './greetUser.types';

const GreetUser = (props: GreetProps) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
};
export default GreetUser;
