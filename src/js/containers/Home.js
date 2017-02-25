import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from '../components';
import { restActions } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.actions.loadSites();
    console.log(this);
  }

  render() {
    const { sites } = this.props;
    return (
      <div>This is -------------------------------------------------------Home
        {
          sites && sites.length > 0 ?
          <Table data={sites}/>
          :
          <div>no data</div>
        }
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
