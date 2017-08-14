/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/13/17.
 */

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Button , Glyphicon} from 'react-bootstrap';

export default class SubscriptionList extends React.PureComponent {
  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>From</th>
          <th>To</th>
          <th>Type</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {this.props.subscriptions.map((s, index) =>
          <tr>
            <td>{`${index+1}.`}</td>
            <td>{s.from}</td>
            <td>{s.to}</td>
            <td>{s.type}</td>
            <td>
              <Button bsSize="small" bsStyle="danger" onClick={() => this.props.onDelete(index)}>
                <Glyphicon glyph="trash"/>
              </Button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    )
  }
}

SubscriptionList.propTypes = {
  subscriptions: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};
