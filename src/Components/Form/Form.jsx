import React from "react";
import Button from "../Button/Button";
import "./Form.css";

export default function Form(props) {
  return (
    <form onSubmit={e => props.handleSubmit(e)}>
      <TextInput onChange={props.onFrontChange} />
      <LabelInput onChange={props.onBackChange} />
      <Submit />
    </form>
  );
}

function TextInput(props) {
  return <input onChange={e => props.onChange(e.target.value)} type='text' name='text' placeholder='Word' />;
}

function LabelInput(props) {
  return <textarea onChange={e => props.onChange(e.target.value)} name='definition' placeholder='Definition'></textarea>;
}

function Submit() {
  return <Button displayString='Submit Form' />;
}
