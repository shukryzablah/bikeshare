import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import CounterDisplay from './CounterDisplay';
import BikeGrid from './BikeGrid';

const BikePage = (props) => {
  return (
    <div>
      <CounterDisplay count={4} numVariant="h1" textVariant="h4" />
      <BikeGrid />
    </div>
  );
};

export default BikePage;