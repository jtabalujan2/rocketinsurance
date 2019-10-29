import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Divider, Button, Icon } from 'semantic-ui-react'

import { generateQuote } from '../utl/api'

const RatingScreen = (props) => {

   const {
      firstName,
      lastName,
      address1,
      address2,
      city,
      region,
      postal
   } = props.state.userData

   let currentQuote = "";


   const handleQuoteClick = (async () => {
      //generates quote based on intial form data
      try {
         const response = await generateQuote(props.state.userData)
         const event = { target: { value: response } }

         //enables local storage in place of a back end to view previous customer quotes
         //sets state of current session
         console.log('response: ', response)
         localStorage.setItem(`${response.quote.quoteId}`, JSON.stringify(response))
         props.handleOnChange(`${response.quote.quoteId}`, 'quotes')(event)

         currentQuote = response.quote.quoteId
      }
      catch (e) {
         console.log(e)
      }


   })



   return (
      <>
         <div>
            <h1>Let's Get To Know You!</h1>

            <Divider horizontal style={{ margin: 20 }}>
               <h3>Personal Information</h3>
            </Divider>
            <Form>
               <Form.Group widths="equal">
                  <Form.Input
                     fluid
                     value={firstName}
                     onChange={props.handleOnChange('firstName', 'userData')}
                     name="firstName"
                     label="First Name"
                     placeholder="First Name"
                  />

                  <Form.Input
                     fluid
                     value={lastName}
                     onChange={props.handleOnChange('lastName', 'userData')}
                     name="lastName"
                     label="Last Name"
                     placeholder="Last Name"
                  />

               </Form.Group>


               <Divider horizontal style={{ margin: 25 }}>
                  <h3>Contact Information</h3>
               </Divider>

               <Form.Group widths="3">

                  <Form.Input
                     fluid
                     value={address1}
                     onChange={props.handleOnChange('address1', 'userData')}
                     name="address1"
                     label="Address Line 1"
                     placeholder="Address Line 1"
                  />

                  <Form.Input
                     fluid
                     value={address2}
                     onChange={props.handleOnChange('address2', 'userData')}
                     name="address2"
                     label="Address Line 2"
                     placeholder="Address Line 2"
                  />


               </Form.Group>


               <Form.Group widths="equal">
                  <Form.Input
                     value={city}
                     onChange={props.handleOnChange('city', 'userData')}
                     name="city"
                     label="City"
                     placeholder="City"
                  />
                  <Form.Input
                     fluid
                     value={region}
                     onChange={props.handleOnChange('region', 'userData')}
                     name="region"
                     label="State / Region"
                     placeholder="State / Region"
                  />
                  <Form.Input
                     fluid
                     value={postal}
                     onChange={props.handleOnChange('postal', 'userData')}
                     name="postal"
                     label="Postal"
                     placeholder="Postal"
                  />

               </Form.Group>

               <Button
                  animated
                  color='teal'
                  onClick={async () => {
                     await handleQuoteClick()
                     props.history.push(`/quote?id=${currentQuote}`)
                  }}
               >
                  <Button.Content visible>Quote</Button.Content>
                  <Button.Content hidden>
                     <Icon name='arrow right' />
                  </Button.Content>
               </Button>
            </Form>

         </div>
      </>

   )
}


export default withRouter(RatingScreen);