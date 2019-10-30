import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'semantic-ui-react';


import './App.css';

import QuoteScreen from './components/QuoteScreen';
import RatingScreen from './components/RatingScreen'
import ErrorBoundary from './components/ErrorBoundary'
import Page404 from './components/Page404'


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

    //nested state causes a lot of issues with standard state in react
    //wanted to stick with no redux just because i found it much less complex than if i were to try to also implement redux
    const handleOnChange = (propertyName, parentProp) => (event) => {
      this.setState({
        [parentProp]: {
          ...this.state[parentProp],
          [propertyName]: event.target.value
        }
      })

    }

    const handleDoubleNestedOnChange = (propertyName, parentProp, grandParentProp) => (event) => {
      this.setState({
        [grandParentProp]: {
          ...this.state[grandParentProp],
          [parentProp]: {
            ...this.state[parentProp],
            [propertyName]: event.target.value
          }
        }
      })
    }

    const handleTripleNestedOnChange = (propertyName, parentProp, grandParentProp, greatGrandParentProp) => (event) => {
      this.setState({
        [greatGrandParentProp]: {
          ...this.state[greatGrandParentProp],
          [grandParentProp]: {
            ...this.state[grandParentProp],
            [parentProp]: {
              ...this.state[parentProp],
              [propertyName]: event.target.value
            }
          }
        }
      })

    }

    return (

      <Container style={{ margin: 20 }} >
        <Router>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" forceRefresh={true} render={(props) => <RatingScreen {...props} handleOnChange={handleOnChange} state={this.state} />} />
              <Route path="/quote" render={(props) => <QuoteScreen {...props} handleOnChange={handleOnChange} handleTripleNestedOnChange={handleTripleNestedOnChange} state={this.state} />} />
              <Route component={Page404} />
            </Switch>
          </ErrorBoundary>
        </Router>
      </Container >

    )
  }
}


export default App;
