import React from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1> Something went wrong. </h1>
          <h2> Try going back home instead</h2>
          <Button
            // as={Link}
            animated
            color='teal'
            onClick={() => {
              this.props.history.push(`/`)
              window.location.reload();
            }}
          >
            <Button.Content visible>Home</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
        </>
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary) 