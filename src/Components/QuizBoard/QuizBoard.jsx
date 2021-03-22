import "./QuizBoard.css";

import React, { Component } from "react";
import axios from "axios";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

class QuizBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 10,
      currentQuestions: 0,
      userAnswer: "",
      wrongAnswers: 0,
      correctAnswer: "",
      isCorrectAnswer: false,
      breeds: [],
    };
    this.correctAnswer = "";
  }

  getDogBreedList = () => {
    const api_key = "7cd359a9-f14a-4410-9f60-9489b591e1cb";

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
    // this.correctAnswer = this.props.answer; //TODO: should be passed as a prop
    // this.correctAnswer = "German Shepard";
    this.setState({ correctAnswer: "German Shepard" });
  }

  createQuestion() {
    console.log("Creating a question");
    console.log(this.state.breeds);
    console.log(this.state.breeds.length);
    const breeds = this.state.breeds;
    let rightAnswerIndex = Math.floor(Math.random() * breeds.length);
    // keep the right answer as a state
    console.log(rightAnswerIndex, this.correctAnswer);
  }

  onAnswer = (e) => {
    console.log(e, e.target.value, e.target.id);
    this.setState({ userAnswer: e.target.value });
  };

  onEnter = (e) => {
    console.log("onEnter");
    // check if user has submited a response
    if (this.state.userAnswer === "") return;
    // Check if the answer is correct
    if (this.state.correctAnswer === this.state.userAnswer) {
      console.log("Correct");
      // display a win message and move to the next question
    } else {
      console.log("Wrong");
    }
  };

  renderQuestion() {
    const mockBreeds = ["Afghan", "Greyhound", "Wisla", "German Shepard"];
    const mockUrl = "https://cdn2.thedogapi.com/images/qBPEW95T2.jpg";
    const mockID = "123445";
    this.createQuestion();
    return (
      <QuizQuestion
        getQuestion={this.onAnswer}
        enter={this.onEnter}
        key={mockID}
        type="dog"
        breeds={mockBreeds}
        imageUrl={mockUrl}
      />
    );
  }

  // User has selected an answer, find out if its the correct answer
  onUserAnswer = (e) => {};

  render() {
    return (
      <div className="quiz-container">
        <h1>Test Yourself: Are you a real dog enthusiast?</h1>
        <div className="outside-container">
          <div className="question-container">{this.renderQuestion()}</div>
        </div>
      </div>
    );
  }
}

export default QuizBoard;
