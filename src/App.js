import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import QuoteScreen from './components/QuoteScreen';
import RatingScreen from './components/RatingScreen'



class App extends React.Component {


  state = {
    userData: {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      region: "",
      postal: ""
    },
    quotes: {

    }
  }

  render() {

    const handleOnChange = (propertyName, parentProp) => (event) => {
      this.setState({
        [parentProp]: {
          ...this.state[parentProp],
          [propertyName]: event.target.value
        }
      })

    }



    return (

      <Router>
        <div>
          <Route exact path="/" render={(props) => <RatingScreen {...props} handleOnChange={handleOnChange} state={this.state} />} />
          <Route path="/quote" render={(props) => <QuoteScreen {...props} handleOnChange={handleOnChange} state={this.state} />} />
        </div>
      </Router>


    )
  }
}


export default App;
