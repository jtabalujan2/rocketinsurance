import React, { useState } from 'react'
import { Form, Divider, Button, Image, Grid, Container } from 'semantic-ui-react'

import rocketIcon from '../assets/rocketinsurancelogo2.png'

const QuoteScreen = (props) => {

    function useQuery() {
        return new URLSearchParams(props.location.search);
    }

    try {
        //getting id based on URL
        const quoteId = useQuery().get("id");

        //looking at local storage for data
        const local = JSON.parse(localStorage.getItem(`${quoteId}`))

        //set state based on if state exists already or not
        if (!props.state.quotes[quoteId]) {
            const event = { target: { value: local } }
            props.handleOnChange(`${quoteId}`, 'quotes')(event)
        }

        //if we can't get a local storage value, we don't want to render the component
        if (local === null) {
            return null
        }

        //would rather look at local storage since it is stored in the screen before
        //makes it more reliable than checking props just bc a user can refresh or go directly through url 
        const {
            first_name,
            last_name
        } = local.quote.policy_holder

        const {
            line_1,
            line_2,
            city,
            region,
            postal
        } = local.quote.rating_address

        const {
            deductible,
            asteroid_collision
        } = local.quote.variable_options

        const { premium } = local.quote

        // //setting the deductible choices and asteroid choices based on if state exists 
        const deductibleChoice = props.state.quotes[quoteId] ?
            (props.state.quotes[quoteId].quote.variable_selections.deductible) : (local.quote.variable_selections.deductible)
        const asteroid_collsionChoice = props.state.quotes[quoteId] ?
            (props.state.quotes[quoteId].quote.variable_selections.asteroid_collision) : (local.quote.variable_selections.asteroid_collision)


        return (
            <div id="main">
                <Form widths="equal">
                    <Image src={rocketIcon} alt="rocket insurance logo" centered />
                </Form>


                <Divider horizontal>
                    <h2>Here's What We Can Do For You, {first_name}</h2>
                </Divider>
                <Container className="card" fluid>
                    <Container className="inner-card">
                        <br />

                        <Grid columns={2} padded>
                            <Divider className="invisible hidden" horizontal >
                                <h3> Quote ID: </h3>
                                <Button disabled size="huge">{quoteId}</Button>
                            </Divider>
                            <Divider className="invisible hidden" horizontal >
                                <h3> Current Premium: </h3>
                                <Button disabled size="huge">${premium}</Button>
                            </Divider>
                            <Grid.Column>

                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>

                            <Grid.Column>
                                <Divider className="invisible hidden" horizontal >
                                    <h3> Selected Deductible: </h3>
                                    <Button disabled size="huge">${deductibleChoice}</Button>
                                </Divider>
                            </Grid.Column>
                            <Grid.Column>
                                <Divider className="invisible hidden" horizontal >
                                    <h3> Selected Asteroid Collision: </h3>
                                    <Dropdown
                                        placeholder='Select Friend'
                                        fluid
                                        selection
                                        options={friendOptions}
                                        value={asteroid_collsionChoice}
                                    />
                                    <Button disabled size="huge">${asteroid_collsionChoice}</Button>
                                </Divider>
                            </Grid.Column>

                        </Grid>

                    </Container>

                </Container>

            </div>
        )
    }
    catch (e) {
        console.log(e)
    }
}


//UP2688975


export default QuoteScreen;