import React, { Component } from "react";
import CardList from "../components/CardList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Employee List</h1>
        <CardList />
      </div>
    );
  }
}
