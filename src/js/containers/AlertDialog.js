import React, { Component } from "react";
import { FlatButton, Dialog } from 'material-ui';

export default class AlertDialog extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Discard"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
        >
            Discard draft?
        </Dialog>
    );
  }
}
