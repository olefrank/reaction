import React, { Component } from "react";
import Element from "../Element/Element";
import PropTypes from "prop-types";
import "./Introduction.css";

class Introduction extends Component {
  state = {
    countdown: 3000,
    timer: undefined
  };

  componentDidMount() {
    const timer = setInterval(() => {
      let countdown = this.state.countdown;
      countdown -= 1;
      this.setState({ countdown });

      if (countdown === 0) {
        this.props.onGameStart();
      }
    }, 1000);

    this.setState({ timer });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const { countdown } = this.state;
    const { shape } = this.props;

    return (
      <div className="Introduction">
        <h1>{countdown}</h1>
        <p>
          Click the{" "}
          <span className="Introduction__correct">
            <Element shape={shape} />
          </span>{" "}
          as fast as you can.
        </p>
      </div>
    );
  }
}

Introduction.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.string,
  onGameStart: PropTypes.func
};

export default Introduction;
