import React from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Icon, Header, Container, Grid } from 'semantic-ui-react'

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
    console.log('error: ', error);
    console.log('info: ', info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <Container style={{ margin: 20 }}>
            <Header as="h1" textAlign='center'> Something went wrong. </Header>
            <Header as="h1" textAlign='center'> Try going back home instead</Header>
            <Grid>
              <Grid.Column textAlign="center">
                <Button
                  // as={Link}
                  animated
                  color='teal'
                  onClick={() => {
                    console.log(this.props.history)
                    this.props.history.push(`/`)
                    window.location.reload();
                  }}
                >
                  <Button.Content visible>Home</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid>

          </Container>

        </>
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary) 