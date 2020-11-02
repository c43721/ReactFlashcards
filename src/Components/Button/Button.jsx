import React from "react";
import { VscAdd } from "react-icons/vsc";
import "./Button.css";

export default function Button(props) {
  return (
    <button className='btn'>
      <VscAdd />
    </button>
  );
}
