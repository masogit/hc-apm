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
    // console.log(sites);
    return (
      <div>This is -------------------------------------------------------Home
        <Table data={sites}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sites: state.rest.sites
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
