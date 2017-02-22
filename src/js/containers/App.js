import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppBar, Drawer } from 'material-ui';
import { Menu, TopBar } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TYPE, themes } from '../constants';
import { headerActions } from '../actions';

class App extends Component {

  renderSidebar() {
    const { menu, header, toggleSidebar } = this.props;
    return (
      <Drawer zDepth={2} open={header.siderBarToggle}>
        <AppBar title={header.title} onLeftIconButtonTouchTap={toggleSidebar} />
        <Menu menu={menu}/>
      </Drawer>
    );
  }

  render() {
    const { header, actions, toggleSidebar } = this.props;
    return (
        <MuiThemeProvider muiTheme={themes.getTheme(header.currentTheme)}>
            <div>
                <TopBar header={header} actions={actions} toggleSidebar={toggleSidebar} />
                <div>
                    { this.renderSidebar() }
                    <div>{this.props.children}</div>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(headerActions, dispatch),
    toggleSidebar: () => dispatch({type: TYPE.TOGGLE_SIDEBAR})
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
