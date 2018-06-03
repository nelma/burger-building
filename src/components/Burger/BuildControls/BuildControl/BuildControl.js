import React from 'react';

import classes from './BuildControl.css';

const buildControl = () => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <buttton className={classes.Less}>Less</buttton>
    <buttton className={classes.More}>More</buttton>
  </div>
);

export default buildControl;