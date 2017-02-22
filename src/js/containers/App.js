import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppBar, Drawer } from 'material-ui';
import { Menu, TopBar } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getTheme } from '../constants/themes';
import { headerActions } from '../actions';

class App extends Component {
  render() {
    const { menu, header, actions } = this.props;
    return (
        <MuiThemeProvider muiTheme={getTheme(header.currentTheme)}>
            <div>
                <TopBar header={header} actions={actions} />
                <div>
                    <Drawer zDepth={2}>
                      <AppBar title={header.title} />
                      <Menu menu={menu}/>
                    </Drawer>
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
    actions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
