import React from "react";
import Button from "../Button/Button";
import "./Form.css";

export default function Form(props) {
  return (
    <form onSubmit={e => props.handleSubmit(e)}>
      <TextInput />
      <TextInput />
      <Submit />
    </form>
  );
}

function TextInput() {
  return <input type='text' name='text' />;
}

function Submit() {
  return <Button displayString='Submit Form' />;
}
