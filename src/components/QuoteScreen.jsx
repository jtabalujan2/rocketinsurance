import React, { useEffect } from 'react'
import { Form, Divider, Button, Image, Grid, Container, Dropdown, Modal, Header } from 'semantic-ui-react'
import confetti from 'canvas-confetti';

import rocketIcon from '../assets/rocketinsurancelogo2.png'

const QuoteScreen = (props) => {

    try {
        function useQuery() {
            return new URLSearchParams(props.location.search);
        }
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

        const convertToDropdownArray = (arrOfChoices) => {
            return (arrOfChoices.map((indexValue) => {
                return ({
                    key: indexValue,
                    text: '$' + indexValue,
                    value: indexValue
                })
            }))
        }

        //would rather look at local storage since it is stored in the screen before
        //makes it more reliable than checking props just bc a user can refresh or go directly through url 

        const {
            first_name,
            last_name
        } = local.policy_holder

        const { premium } = local

        const {
            deductible,
            asteroid_collision
        } = local.variable_options

        const deductibleOptions = convertToDropdownArray(deductible.values)
        const asteroid_collisionOptions = convertToDropdownArray(asteroid_collision.values)


        // //setting the deductible choices and asteroid choices based on if state exists 
        const deductibleChoice = props.state.quotes[quoteId] ?
            (props.state.quotes[quoteId].variable_selections.deductible) : (local.variable_selections.deductible)
        const asteroid_collisionChoice = props.state.quotes[quoteId] ?
            (props.state.quotes[quoteId].variable_selections.asteroid_collision) : (local.variable_selections.asteroid_collision)


        return (

            <div id="main" >
                <Form widths="equal">
                    <Image as='a'
                        onClick={() => {
                            props.history.push(`/`)
                            window.location.reload();
                        }}
                        src={rocketIcon} alt="rocket insurance logo" centered />
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
                                    <Dropdown
                                        placeholder='Select Deductible'
                                        fluid
                                        selection
                                        onChange={props.handleTripleNestedOnChange(`${quoteId}`, 'deductible', 'variable_selections', 'quotes')}
                                        options={deductibleOptions}
                                        defaultValue={deductibleChoice}
                                    />
                                </Divider>
                            </Grid.Column>
                            <Grid.Column>
                                <Divider className="invisible hidden" horizontal >
                                    <h3> Selected Asteroid Collision: </h3>
                                    <Dropdown
                                        placeholder='Select Asteroid Collision'
                                        fluid
                                        selection
                                        onChange={(e, { value }) => {
                                            const event = { target: { value } }
                                            props.handleTripleNestedOnChange(`${quoteId}`, 'asteroid_collision', 'variable_selections', 'quotes')(event)
                                        }

                                        }
                                        options={asteroid_collisionOptions}
                                        defaultValue={asteroid_collisionChoice}
                                    />

                                </Divider>
                            </Grid.Column>

                        </Grid>

                        <Divider className="invisible hidden" horizontal >
                            <Modal
                                trigger={<Button>Puchase</Button>}
                                header='Welcome to the Rocket Insurance Family!!'
                                content='We hope you have a blast!'
                                onOpen={() => confetti({
                                    particleCount: 300,
                                    spread: 180
                                })}
                                style={{ 'backgroundColor': 'none' }}

                            />

                        </Divider>

                    </Container>

                </Container>

            </div >
        )
    }
    catch (e) {
        console.log(e)
    }
}


//UP2688975


export default QuoteScreen;