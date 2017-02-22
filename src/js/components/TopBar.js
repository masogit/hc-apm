import React, { Component } from "react";
import { AppBar, IconMenu, IconButton, MenuItem, Toggle } from 'material-ui';
import { SocialPerson, ActionExitToApp, ActionHelp } from 'material-ui/svg-icons';
import { Translate } from 'react-redux-i18n';

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

  renderLocaleMenuItem(header, actions) {
    const zhLocale = (header.currentLocale == 'zh');
    return (
        <MenuItem leftIcon={<Toggle toggled={zhLocale} />} primaryText={header.currentLocale} onTouchTap={actions.switchLocale.bind(this, header.currentLocale)}/>
    );
  }

  render() {
    const { header, actions, toggleSidebar, messageSend } = this.props;
    const iconElementRight = (
      <IconMenu iconButtonElement={<IconButton><SocialPerson /></IconButton>} targetOrigin={{vertical: 'bottom', horizontal: 'left'}}>
          { this.renderThemeMenuItem(header, actions) }
          { this.renderLocaleMenuItem(header, actions) }
          <MenuItem value="2" primaryText="Send a message" insetChildren onTouchTap={messageSend.bind(this, 'Test send a global message!')}/>
          <MenuItem value="3" primaryText="Settings" insetChildren/>
          <MenuItem value="4" primaryText="Help" leftIcon={<ActionHelp />} />
          <MenuItem value="5" primaryText={<Translate value="header.menu.logoff" />} leftIcon={<ActionExitToApp />}/>
      </IconMenu>
    );

    return (
        <AppBar title={header.title} iconElementRight={iconElementRight} onLeftIconButtonTouchTap={toggleSidebar} />
    );
  }
};
