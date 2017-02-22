import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from '../components';
import { restActions } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.actions.loadSites();
  }

  render() {
    const { sites } = this.props;
    return (
      <div>This is -------------------------------------------------------Home
        <Table />
        {
          JSON.stringify(sites)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sites: state.sites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(restActions, dispatch)
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);
