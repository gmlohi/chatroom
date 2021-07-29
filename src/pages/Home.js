import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className="mainbox-container jumbotron jumbotron-fluid py-5 ">
            <div className="main-box container text-center py-5">
              <h1 className="display-4">
                Welcome to <span className="chateasy"> ChatEasy </span>
              </h1>
              <p className="lead">A real-time chat room. Simple. Easy.</p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">
                  Create New Account
                </Link>
                <Link className="btn px-5" to="/login">
                  Login to Your Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
