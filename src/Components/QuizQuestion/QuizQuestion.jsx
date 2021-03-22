import "./QuizQuestion.css";
import React, { Component } from "react";

// This class displays the image as a question and the answers passed
// as props from parent.
// the first answer in the array is the right answer, but the component shuffles
// the answers and displays them in a random order
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: props.image, breeds: props.breeds };
  }
  renderAnswers() {
    return this.state.breeds.map((breed, i) => {
      return (
        <React.Fragment key={`breed-${i}`}>
          <input
            key={`dog-${i}`}
            type="radio"
            id={`dog-${i}`}
            name={this.props.type}
            value={breed}
            onChange={this.props.getQuestion}
          />
          <label key={`dog-lbl-${i}`} htmlFor={`dog-${i}`}>
            {breed}
          </label>

          <br />
        </React.Fragment>
      );
    });
  }

  render() {
    // const { imageUrl, breeds } = this.state;
    return (
      <div className="container">
        <img src={this.state.imageUrl} alt={"dog"}></img>
        <div className="question">
          <h1>What breed is this dog?</h1>

          {this.renderAnswers()}
          <input
            className="btn"
            type="button"
            onClick={this.props.enter}
            value="Check"
          ></input>
        </div>
      </div>
    );
  }
}

export default QuizQuestion;
