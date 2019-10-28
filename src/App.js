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
    quotes: {

    }
  }

  render() {

    const isEditing = this.state.userData.isEdit

    const handleOnChange = (propertyName, parentProp) => (event) => {
      this.setState({
        [parentProp]: {
          ...this.state[parentProp],
          [propertyName]: event.target.value
        }
      })

    }



    return (
      <div>
        {isEditing ?
          (<RatingScreen handleOnChange={handleOnChange} state={this.state} />) :
          (<QuoteScreen handleOnChange={handleOnChange} state={this.state} />)}
      </div>


    )
  }
}


export default App;
