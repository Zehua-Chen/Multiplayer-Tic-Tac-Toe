import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import withStyles from "react-jss";
import mapStateToProps from "./mapStateToProps";

const style = {
  enter: {
    opacity: 0
  },

  enterActive: {
    opacity: 1,
    transition: "300ms ease-in-out"
  },

  leave: {
    opacity: 1
  },

  leaveActive: {
    opacity: 0,
    transition: "0ms ease-in-out"
  }
};

// interface IDisconnectedPanelProps {
//   connected: boolean;
// }

class DisconnectedPanel extends React.Component {
  render() {
    var pageContent = this.renderPageContent();
    const { classes } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: classes.enter,
          enterActive: classes.enterActive,
          leave: classes.leave,
          leaveActive: classes.leaveActive
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={1}
      >
        {pageContent}
      </ReactCSSTransitionGroup>
    );
  }

  renderPageContent() {
    if (this.props.connected) return null;

    return (
      <div key={4} className="mt-3 card bg-danger text-white">
        <div className="card-body">
          <h5 className="card-title">Disconnected</h5>
          <p>You are disconnected from the server. Your moves are blocked.</p>
        </div>
      </div>
    );
  }
}

// export default withStyles(style)(connect(mapStateToProps)(DisconnectedPanel));
export default connect(mapStateToProps)(withStyles(style)(DisconnectedPanel));
