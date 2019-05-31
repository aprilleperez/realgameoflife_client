import React from "react";
import "../Outcomes/outcomes.css"

class EndDisplay extends React.Component {
  state = {
    output: undefined
  }
  componentDidMount() {
    let arr = [];
    this.props.starting.forEach((elem, i) => {
      arr.push(<div>{this.props.gameObj.traits["trait" + (i + 1)] + ": " + this.props.starting[i] + " --> " + this.props.final[i]}</div>)
    });

    this.setState({ output: arr })
  }

  render() {
    if (this.state.output)
      return (
        <React.Fragment>
          <img src={this.props.avatar.picture}></img>
          <h1 className="text-center orange">{this.props.avatar.name}</h1>
          <h3 className="text-center blue boldText">{this.state.output}</h3>
        </React.Fragment>
      )
    else
      return "...";
  }
}

export default EndDisplay;