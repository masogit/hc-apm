import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppBar, Drawer, Snackbar } from 'material-ui';
import { Menu, TopBar } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TYPE, themes } from '../constants';
import { headerActions } from '../actions';

class App extends Component {

  renderSidebar() {
    const { menu, header, toggleSidebar } = this.props;
    return (
      <Drawer open={header.siderBarToggle}>
        <AppBar title={header.title} onLeftIconButtonTouchTap={toggleSidebar} />
        <Menu menu={menu}/>
      </Drawer>
    );
  }

  renderSnackbar() {
    const { header, messageClose } = this.props;
    return (
      <Snackbar
        open={header.messages !== ''}
        message={header.messages}
        autoHideDuration={3000}
        onRequestClose={messageClose}
      />
    );
  }

  render() {
    const { header, actions, toggleSidebar, messageSend } = this.props;
    const fixedWidthStyle = {
      paddingLeft: '270px'
    };
    console.log(this.props.children);
    return (
        <MuiThemeProvider muiTheme={themes.getTheme(header.currentTheme)}>
            <div>
                { this.renderSidebar() }
                <TopBar header={header} actions={actions} toggleSidebar={toggleSidebar} messageSend={messageSend}/>
                <div style={header.siderBarToggle ? fixedWidthStyle : null}>
                  <h2> { this.props.children.type.name } </h2>
                  { this.props.children }
                </div>
                { this.renderSnackbar() }
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
    toggleSidebar: () => dispatch({type: TYPE.TOGGLE_SIDEBAR}),
    messageClose: () => dispatch({type: TYPE.MSG_CLOSE}),
    messageSend: (msg) => dispatch({type: TYPE.MSG_ALERT, message: msg})
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
