import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import { withStyles } from '@material-ui/core/styles';

import CounterDisplay from './CounterDisplay';
import BikeGrid from './BikeGrid';

import Bikes from '../api/bikes';

const BikePage = (props) => {
  const { bikes } = props;

  return (
    <div>
      <CounterDisplay count={4} numVariant="h1" textVariant="h4" />
      <BikeGrid bikes={bikes}/>
    </div>
  );
};

export default BikePageContainer = withTracker(() => {
  return {
    bikes: Bikes.find().fetch(),
  };
})(BikePage);