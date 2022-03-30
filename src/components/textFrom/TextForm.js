import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case was Clicked " + " " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div>
      <div className="form-group">
        <h1>{props.heading}</h1>
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          placeholder="Enter Text Here"
          id="myBox"
          rows="8"
        ></textarea>

        <button
          type="button"
          className="btn btn-primary my-2 p-2"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
      </div>
    </div>
  );
}
