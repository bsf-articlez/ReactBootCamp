import React, { Component } from "react";
import Counter from "../../components/Counter";
import CounterHook from "../../components/CounterHooks";
import { connect } from "react-redux";
import { actionType, addFriend } from "../../stores/actions";

class AppContainer extends Component {
  componentDidMount = () => {};

  componentDidUpdate = () => {
    const { friend } = this.props;
    console.log("friend: ", friend);
  };

  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = ({ friend }) => ({
  friend
});

const mapDispatchToProps = dispatch => {
  return {
    addFriend: addFriend(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
