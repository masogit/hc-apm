import React, { Component } from "react";
import { FlatButton, Dialog } from 'material-ui';

export default class AlertDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open || true
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const { title , element, handleSave } = this.props;
    const actions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>
    ];

    if (handleSave)
      actions.push(
        <FlatButton label="Save" primary={true} onTouchTap={handleSave}/>
      );

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
        >
            { title || 'This is title area'}
            { element }
        </Dialog>
    );
  }
}
