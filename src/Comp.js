import React from "react";

export default class Comp extends React.Component {
  componentWillUnmount() {
    alert("Component is going to be removed");
  }
  render() {
    return (
      <>
        <h1>Child Comp</h1>
      </>
    );
  }
}
