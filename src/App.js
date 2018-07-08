import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

/* import 'flatpickr/dist/themes/material_green.css'; */

import Flatpickr from 'react-flatpickr';

class App extends Component {
  
  constructor() {
    super();
 
    this.state = {
      date: new Date()
    };
  }


  render() {
    const { date } = this.state;

    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Flatpickr data-enable-time
              value={date}
              onChange={date => { this.setState({date}) }} />
              </Layout>
      </div>
    );
  }
}

export default App;
