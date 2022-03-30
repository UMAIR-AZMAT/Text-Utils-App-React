import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case was Clicked " + " " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlelowClick = () => {
    // console.log("Lower Case was Clicked " + " " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleResetClick = () => {
    // console.log("Reset Text Case was Clicked " + " " + text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="form-group">
          <h3>{props.heading}</h3>
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
            className="btn btn-primary my-2"
            onClick={handleUpClick}
          >
            Convert to Upper Case
          </button>
          <button
            type="button"
            className="btn btn-dark my-2 mx-2"
            onClick={handlelowClick}
          >
            Convert to Lower Case
          </button>
          <button
            type="button"
            className="btn btn-danger my-2 mx-2"
            onClick={handleResetClick}
          >
            Reset Text
          </button>
        </div>
      </div>
      <div className="container">
        <h5>Text Summary</h5>
        <hr />
        <p>
          <b>Character: </b>
          {text.length}
          <b> Words: </b>
          {text.split(" ").length}
        </p>
        <p>
          <b>Read time: </b>
          {0.008 * text.split(" ").length + " Minutes read"}
        </p>
        <div className="card-body bg-light">
          <p className="card-title">
            <b className="card-text">Text Preview</b>
            <hr /> <br />
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
