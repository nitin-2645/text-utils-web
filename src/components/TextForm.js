import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to upper case", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to Lower case", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("convert to clear case", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    console.log("I am copy");
    props.showAlert("convert to copy case", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("convert to extraspace", "success");
  };

  const handleonChange = (event) => {
    //console.log("change on click")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundcolor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "red" : "black",
            }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleLoClick}
        >
          convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleClearClick}
        >
          convert to Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpace}
        >
          remove space
        </button>
      </div>
      <div className="container my-2">
        <h1> Your text summary</h1>
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and{text.length}characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minture read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox preview it here"}
        </p>
      </div>
    </>
  );
}
