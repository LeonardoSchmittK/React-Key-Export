import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

const App = ({ details }) => {
  const { username, techs } = details;
  return (
    <div className={"container"}>
      <h1>{details.username + ": "}</h1>
      <Techs knowledge={techs}>
        <span>Techs:</span>
      </Techs>
      <Grades />
    </div>
  );
};

const Techs = ({ knowledge, children }) => (
  <samp>
    <strong> {children}</strong>
    {knowledge.map((item) => (
      <span key={item.id}>{item.name},</span> // unique, stable and permanent value
    ))}
  </samp>
);

class Grades extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      text: "",
      info: {
        age: 55,

        country: "France",
      },
    };

    this.closeAge = this.closeAge.bind(this);
    this.openAge = this.openAge.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  closeAge() {
    this.setState({ show: false });
  }

  openAge() {
    this.setState({ show: true });
  }

  handleChange = (event) => {
    let text = event.target.value;
     text = text.replace(/[A-Z0-9]/g, "");
    this.setState({ text });
  };

  render() {
    const {
      show,
      text,
      info: { age },
    } = this.state;
    return (
      <>
        {show === true ? (
          <button onClick={this.closeAge}>
            <i className="fas fa-times"></i>
          </button>
        ) : (
          <button onClick={this.openAge}>Show</button>
        )}
        {show === true ? <h1>{age}</h1> : null}
        <input type="text" value={text} onChange={this.handleChange}></input>
      </>
    );
  }
}

Techs.propTypes = {
  children: PropTypes.element,
};

export { App }; // Workaround for export default
