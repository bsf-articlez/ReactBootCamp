import React, { Component } from "react";
import Counter from "../../components/Counter";
import CounterHook from "../../components/CounterHooks";
import { connect } from "react-redux";
import { actionType, addFriend } from "../../stores/actions";
import AddFriend from "../../components/AddFriend";

class AppContainer extends Component {
  componentDidMount = () => {};

  componentDidUpdate = () => {
    const { friend } = this.props;
    console.log("friend: ", friend);
  };

  onAddFriend = (friendId, targetFriendId) => {
    const { addFriend } = this.props;
    addFriend(friendId, targetFriendId);
  };

  render() {
    return (
      <div>
        <AddFriend onAddFriend={this.onAddFriend} />
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
