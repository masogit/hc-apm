import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Sidebar } from 'grommet';
import { Menu } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getTheme } from '../constants/themes';

class App extends Component {
  render() {
    const { menu, header } = this.props;
    return (
        <MuiThemeProvider muiTheme={getTheme('blackTheme')}>
            <div>
                <AppBar title={header.title} />
                <div>
                    <Sidebar separator="right" size="small">
                        <Menu menu={menu}/>
                    </Sidebar>
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
