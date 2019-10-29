import React, { useState } from 'react'

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
            <div>
                <h1>Here's What We Can Do For You, {first_name}</h1>
                <h1>{quoteId}</h1>

                <h3>Current Premium: ${premium}</h3>

                <h3>Selected Deductible: ${deductibleChoice}</h3>
                <h3>Selected Asteroid Collision: ${asteroid_collsionChoice}</h3>
            </div>
        )
    }
    catch (e) {
        console.log(e)
    }
}


//UP2688975


export default QuoteScreen;