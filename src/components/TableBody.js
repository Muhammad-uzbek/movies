import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  renderingCell = (item, column) => {
    if (column.contenet) return column.contenet(item);
    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={column.path || column.label}>
                {this.renderingCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
