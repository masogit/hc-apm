import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { browserHistory } from 'react-router';
import { Translate } from 'react-redux-i18n';
const svgIcons = require('material-ui/svg-icons');

export default class Menu extends React.Component {

  renderListItem(items, parentRoute) {
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
        };
      }
      
      if (item.child) {
        props.nestedItems = this.renderListItem(item.child, route);
      }
      return <ListItem {...props} />;
    });
  }

  render() {
    const { menu } = this.props;
    return (
        <List>
          <Subheader>
            Welcome
          </Subheader>
          { this.renderListItem(menu) }
        </List>
    );
  }
}
