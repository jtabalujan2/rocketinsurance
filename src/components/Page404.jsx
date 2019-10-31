import React from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Page404 = (props) => (
  <div>
    <h2>There was an error loading your quote<code>{props.location.pathname}</code></h2>
    <h2>That URL might not exist, let's start from the beginning again.</h2>
    <Grid>
      <Grid.Column textAlign="center">
        <Button
          // as={Link}
          size="huge"
          animated
          color='teal'
          onClick={() => {
            props.history.push(`/`)
            // window.location.reload();
          }}
        >
          <Button.Content visible>Home</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </Grid.Column>
    </Grid>
  </div>
);

export default withRouter(Page404)