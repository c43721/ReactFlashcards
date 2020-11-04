import React from "react";
import Button from "../Button/Button";
import "./Form.css";

export default function Form(props) {
  return (
    <form onSubmit={e => props.handleSubmit(e)}>
      <TextInput />
      <LabelInput />
      <Submit />
    </form>
  );
}

function TextInput() {
  return <input type='text' name='text' />;
}

function LabelInput() {
  return <textarea name='definition'></textarea>;
}

function Submit() {
  return <Button displayString='Submit Form' />;
}
