import React, { Component, PropTypes } from 'react';
import { isArray, values } from 'lodash';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const confTable = {
  fixedHeader: true,
  fixedFooter: true,
  selectable: true,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: true
};

const confTableBody = {
  stripedRows: false,
  showRowHover: true
};

export default class MTable extends Component {
  renderTableHeader() {
    const {data, fields} = this.props;
    const fieldKeys = fields ? fields.split(",") : (data ? Object.keys(data[0]) : []);
    return fieldKeys.map((key, index) => <TableHeaderColumn key={index}>{key.toUpperCase()}</TableHeaderColumn>);
  }

  renderTableBody() {
    const {data, fields} = this.props;
    const fieldKeys = fields ? fields.split(",") : (data ? Object.keys(data[0]) : []);
    return (
      data.map((record, index) => {
        return (
          <TableRow key={index}>
            {
              fieldKeys.map((key, tdindex) => (
                <TableRowColumn key={tdindex}>
                  {
                    (record[key] instanceof Object) ? values(record[key])[0] : record[key]
                  }
                </TableRowColumn>
              ))
            }
          </TableRow>
        );
      })
    );
  }

  renderTable() {
    return (
      <Table {...confTable}>
        <TableHeader>
          {this.renderTableHeader()}
        </TableHeader>
        <TableBody {...confTableBody}>
          {this.renderTableBody()}
        </TableBody>
      </Table>
    );
  }

  render() {
    const {data} = this.props;

    if (data == undefined || data == null) {
      return <div>Loading...</div>;
    } else if (!isArray(data)) {
      return <div>Data type is incorrect</div>;
    }

    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

MTable.propTypes = {
  data: PropTypes.array.isRequired
};
