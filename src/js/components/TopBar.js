import React, { Component } from "react";
import { AppBar, IconMenu, IconButton, MenuItem, Toggle } from 'material-ui';
import { SocialPerson } from 'material-ui/svg-icons';

export default class TopBar extends Component {

  renderThemeMenuItem(header, actions) {
    const blackTheme = (header.currentTheme == 'blackTheme');
    const leftIcon = (
        <Toggle toggled={blackTheme} thumbSwitchedStyle={{backgroundColor: (blackTheme) ? 'white' : 'black'}}/>
    );
    return (
        <MenuItem leftIcon={leftIcon} primaryText={header.currentTheme} onTouchTap={actions.switchTheme.bind(this, header.currentTheme)}/>
    );
  }

  render() {
    const { header, actions } = this.props;
    const iconElementRight = (
      <IconMenu iconButtonElement={<IconButton><SocialPerson /></IconButton>} targetOrigin={{vertical: 'bottom', horizontal: 'left'}}>
          { this.renderThemeMenuItem(header, actions) }
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
      </IconMenu>
    );

    return (
        <AppBar iconElementRight={iconElementRight} />
    );
  }
};
