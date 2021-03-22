import "./QuizBoard.css";

import React, { Component } from "react";
import axios from "axios";

class QuizBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDogBreedList = () => {
    const api_key = "7cd359a9-f14a-4410-9f60-9489b591e1cb";
    //   const baseUrl =
    //       "https://randomuser.me/api/?results=100&inc=name,picture,login";
    //     axios.get(baseUrl).then((res) => {
    //       const users = res.data.results;
    //       this.setState({ users });
    //       // console.log("users: ", this.state.users);
    //     });
    //     this.setState({ filteredUsers: this.state.users });
    //     console.log(this.state.filteredUsers);
    const baseUrl = "https://api.thedogapi.com/v1/breeds";
    axios.defaults.headers.common["x-api-key"] = api_key;
    axios.get(baseUrl).then((res) => {
      const breeds = res.data;
      this.setState({ breeds });
      console.log(breeds);
    });
  };

  componentDidMount() {
    this.getDogBreedList();
  }

  createQuestion() {}

  render() {
    return (
      <div className="quiz-container">
        <h1>Test Yourself: Are you a real dog enthusiast?</h1>
        <div className="quiz-board">Here shall be a trivia game</div>
        <div className="outside-container">
          <div className="question-container"></div>
        </div>
      </div>
    );
  }
}

export default QuizBoard;
