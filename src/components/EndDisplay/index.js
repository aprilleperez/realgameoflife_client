import React from "react";

class EndDisplay extends React.Component {
  state = {
    output: undefined
  }
  componentDidMount() {
    let arr = [];
    this.props.starting.forEach((elem, i) => {
      arr.push(<div>{this.props.gameObj.traits["trait" + (i + 1)] + ": " + this.props.starting[i] + " ⮕ " + this.props.final[i]}</div>)
    });

    this.setState({ output: arr })
  }

  render() {
    if (this.state.output)
      return this.state.output;
    else
      return "...";
  }
}

export default EndDisplay;