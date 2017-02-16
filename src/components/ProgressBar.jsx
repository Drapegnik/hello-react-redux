/**
 * Created by Drapegnik on 14.02.17.
 */

import React, { PropTypes } from 'react';

export default function ProgressBar(props) {
  return (
    <div className={props.show ? '' : 'hide'} >
      <div className="progress" >
        <div
          className="progress-bar progress-bar-info progress-bar-striped active"
          role="progressbar"
          style={{ width: '100%' }}
        >
          <span>Data loading</span>
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  show: PropTypes.bool.isRequired,
};
