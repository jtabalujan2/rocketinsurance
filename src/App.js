import React from 'react';

import './App.css';

import QuoteScreen from './components/QuoteScreen';
import RatingScreen from './components/RatingScreen'



class App extends React.Component {


  state = {
    userData: {
      isEdit: true,
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      region: "",
      postal: ""

    },
    policyCoverages: {
      deductible: 0,
      asteroid_collision: 0
    }
  }

  render() {

    const handleOnChangeForUser = (propertyName) => (event) => {
      this.setState({
        userData: {
          ...this.state.userData,
          [propertyName]: event.target.value
        }
      })
    }

    const handleOnChangeForPolicy = (propertyName) => (event) => {
      this.setState({
        policyCoverages: {
          ...this.state.policyCoverages,
          [propertyName]: event.target.value
        }
      })
    }

    return (
      <div>
        {this.state.isEdit ?
          (<RatingScreen handleOnChangeFor={handleOnChangeForUser} state={this.state} />) :
          (<QuoteScreen handleOnChangeFor={handleOnChangeForPolicy} state={this.state} />)}
      </div>


    )
  }
}


export default App;
