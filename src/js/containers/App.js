import React, { Component } from "react";
import { connect } from 'react-redux';
import { AppBar, Drawer, IconMenu, IconButton, MenuItem } from 'material-ui';
import { SocialPerson } from 'material-ui/svg-icons';
import { Menu } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getTheme } from '../constants/themes';

class App extends Component {
  render() {
    const { menu, header } = this.props;
    const iconElementRight = (
      <IconMenu iconButtonElement={<IconButton><SocialPerson /></IconButton>} targetOrigin={{vertical: 'bottom', horizontal: 'left'}}>
          <MenuItem value="1" primaryText="Refresh" />
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
      </IconMenu>
    );
    return (
        <MuiThemeProvider muiTheme={getTheme(header.currentTheme)}>
            <div>
                <AppBar iconElementRight={iconElementRight} />
                <div>
                    <Drawer zDepth={2}>
                      <AppBar title={header.title} />
                      <Menu menu={menu}/>
                    </Drawer>
                    <div>body</div>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

// App.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    menu: state.menu,
    header: state.header
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   };
// }

export default connect(
  mapStateToProps
)(App);
