import React from 'react';
import './App.css';

import RatingScreen from './components/RatingScreen'
import QuoteScreen from './components/QuoteScreen'

class App extends React.Component{
  state = {
    userData : {
      firstName: null,
      lastName: null,
      address: {
        line_1: null,
        line_2: null,
        city: null,
        region: null,
        postal: null
      }
    },
    policyCoverages : {
      deductible: 0,
      asteroid_collision: 0
    }
  }

  render() {
    return (
      <div className="App">
        <RatingScreen state={this.state}/>
        <QuoteScreen />
      </div>
    );
  }
}

export default App;
