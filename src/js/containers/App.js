import React, { Component } from "react";
import { connect } from 'react-redux';
import { AppBar, Drawer } from 'material-ui';
import { Menu } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getTheme } from '../constants/themes';

class App extends Component {
  render() {
    const { menu, header } = this.props;
    return (
        <MuiThemeProvider muiTheme={getTheme(header.currentTheme)}>
            <div>
                <AppBar />
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
