import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from 'react-redux-i18n';
import { AppBar, Drawer, Snackbar } from 'material-ui';
import { Menu, TopBar } from '../components';
import { TYPE, themes } from '../constants';
import { headerActions } from '../actions';
import { DevTools } from '../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      containerHeader: ''
    };
  }

  componentWillMount() {
    this.setState({containerHeader: <Translate value={this.props.menu[0].key} />});
    this.findMenuNameByPath(this.props.menu);
  }

  componentDidUpdate(prevProps, prevState) {
    const path = this.props.location.pathname;
    const pathPrev = prevProps.location.pathname;
    if (path != pathPrev)
      this.findMenuNameByPath(this.props.menu);
  }

  findMenuNameByPath(items, parentRoute) {
    const path = this.props.location.pathname;
    items.forEach((item) => {
      const route = parentRoute ? parentRoute + item.route : item.route;
      if (path == route) {
        this.setState({containerHeader: <Translate value={item.key} />});
        return;
      } else if (item.child) {
        this.findMenuNameByPath(item.child, route);
      }
    });
  }

  renderSidebar() {
    const { menu, header, toggleSidebar } = this.props;
    return (
      <Drawer open={header.siderBarToggle}>
        <AppBar title={header.title} onLeftIconButtonTouchTap={toggleSidebar} />
        <Menu menu={menu} path={this.props.location.pathname} user={header.user}/>
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
    // console.log(this);
    return (
        <MuiThemeProvider muiTheme={themes.getTheme(header.currentTheme)}>
            <div>
                { this.renderSidebar() }
                <TopBar header={header} actions={actions} toggleSidebar={toggleSidebar} messageSend={messageSend}/>
                <div style={header.siderBarToggle ? fixedWidthStyle : null}>
                  <h2> { this.state.containerHeader } </h2>
                  { this.props.children }
                </div>
                { this.renderSnackbar() }
                <DevTools />
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
