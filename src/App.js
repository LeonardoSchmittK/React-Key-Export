import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

const App = ({ details }) => {
  const { username, techs } = details;
  return (
    <>
      <h1
        style={{ fontFamily: "fantasy", letterSpacing: 3, marginBottom: -40 }}
      >
        {details.username + ": "}
      </h1>
      <Techs knowledge={techs}>Techs:</Techs>
    </>
  );
};

const Techs = ({knowledge,children}) => (
  <blockquote>
   <strong> {children}</strong>
    {knowledge.map((item) => (
      <span key={item.id}>{item.name}</span> // unique, stable and flexible value
    ))}
  </blockquote>
);

export { App }; // Workaround for export default
