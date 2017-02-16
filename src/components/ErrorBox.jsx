/**
 * Created by Drapegnik on 14.02.17.
 */

import classnames from 'classnames';
import React, { PropTypes } from 'react';

export default function ErrorBox(props) {
  return (
    <div className={classnames((props.error ? '' : 'hide'), 'alert alert-danger')} role="alert">
      <button type="button" className="close" onClick={props.handleClose}>
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Error!</strong> {props.message}
    </div>
  );
}

ErrorBox.propTypes = {
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

ErrorBox.defaultProps = {
  error: false,
};

