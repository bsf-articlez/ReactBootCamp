import React, { Component } from "react";
import Counter from "../../components/Counter";
import CounterHook from "../../components/CounterHooks";
import { connect } from "react-redux";

class AppContainer extends Component {
  componentDidMount = () => {
    const { friend } = this.props;
    console.log("friend: ", friend);
  };
  render() {
    return (
      <div>
        <span>No Hook</span>
        <Counter />
        <br />
        <br />
        <br />
        <span>With Hook</span>
        <CounterHook />
      </div>
    );
  }
}

const mapStateToProps = ({ friend }) => ({
  friend
});

export default connect(mapStateToProps)(AppContainer);
