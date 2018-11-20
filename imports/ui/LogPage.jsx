import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Log from '../api/log';

const LogPage = (props) => {
  return (
    <div>
      This is the log
    </div>
  );
};

export default LogPageContainer = withTracker(() => {
  return {
    log: Log.find().fetch(),
  };
})(LogPage);