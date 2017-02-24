import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { browserHistory } from 'react-router';
import { Translate } from 'react-redux-i18n';
const svgIcons = require('material-ui/svg-icons');
import * as Colors from 'material-ui/styles/colors';

const activeStyle = {
  borderRight: `3px ${Colors.cyan700} solid`,
  transition: 'none'
};

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null
    };
  }

  renderListItem(items, parentRoute) {
    const { path } = this.props;
    return items.map((item) => {
      const route = parentRoute ? parentRoute + item.route : item.route;
      const props = {
        key: "apm_menu_" + item.key,
        primaryText: <Translate value={item.key} />,
        primaryTogglesNestedList: true
      };

      if (item.icon) {
        const Icon = svgIcons[item.icon];
        props.leftIcon = <Icon />;
      };

      if (item.route && !item.child) {
        props.onNestedListToggle = () => {
          browserHistory.push(route);
          this.setState({active: item.key});
        };
      } else {
        if (path.indexOf(item.route) > -1) {
          props.initiallyOpen = true;
        }
      }

      if (item.child) {
        props.nestedItems = this.renderListItem(item.child, route);
      }

      if (this.state.active == item.key || path == route) {
        props.style = activeStyle;
      }

      return <ListItem {...props}/>;
    });
  }

  render() {
    const { menu, user } = this.props;
    return (
        <List>
          <Subheader>
            Welcome, {user.name}
          </Subheader>
          { this.renderListItem(menu) }
        </List>
    );
  }
}
