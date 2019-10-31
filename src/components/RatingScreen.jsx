import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Divider, Button, Icon, Image } from 'semantic-ui-react'
import { Form as FormValidate, Input as FormInput } from 'semantic-ui-react-form-validator'

import { generateQuote } from '../utl/api'
import rocketIcon from '../assets/rocketinsurancelogo2.png'

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


   const handleQuoteClick = (async (e) => {
      //generates quote based on intial form data
      try {

         const response = await generateQuote(props.state.userData)
         const event = { target: { value: response.quote } }

         //enables local storage in place of a back end to view previous customer quotes
         //sets state of current session
         localStorage.setItem(`${response.quote.quoteId}`, JSON.stringify(response.quote))
         props.handleOnChange(`${response.quote.quoteId}`, 'quotes')(event)
         //error handling null returns
         currentQuote = response.quote.quoteId

      }
      catch (e) {
         console.log(e)
      }
   })

   const handleSubmit = async (e) => {
      await handleQuoteClick()
      props.history.push(`/quote?id=${currentQuote}`)
   }


   return (
      <>
         <div id="main">
            <Form widths="equal">
               <Image src={rocketIcon} alt="rocket insurance logo" centered />
            </Form>


            <Divider horizontal style={{ margin: 35 }}>
               <h2>Personal Information</h2>
            </Divider>
            <FormValidate
               onSubmit={handleSubmit}
            >
               <Form.Group widths="equal">
                  <FormInput
                     fluid
                     value={firstName}
                     onChange={props.handleOnChange('firstName', 'userData')}
                     name="firstName"
                     label="First Name*"
                     placeholder="First Name*"
                     validators={['required']}
                     errorMessages={['This field is required']}
                     size="huge"
                  />

                  <FormInput
                     fluid
                     value={lastName}
                     onChange={props.handleOnChange('lastName', 'userData')}
                     name="lastName"
                     label={"Last Name*"}
                     placeholder="Last Name*"
                     validators={['required']}
                     errorMessages={['This field is required']}
                     size="huge"
                  />

               </Form.Group>


               <Divider horizontal style={{ margin: 35 }}>
                  <h2>Contact Information</h2>
               </Divider>

               <Form.Group widths="3" >

                  <FormInput
                     fluid
                     value={address1}
                     onChange={props.handleOnChange('address1', 'userData')}
                     name="address1"
                     label="Address Line 1*"
                     placeholder="Address Line 1*"
                     validators={['required']}
                     errorMessages={['This field is required']}
                     size="huge"
                  />

                  <FormInput
                     fluid
                     value={address2}
                     onChange={props.handleOnChange('address2', 'userData')}
                     name="address2"
                     label="Address Line 2"
                     placeholder="Address Line 2"
                     size="huge"
                  />


               </Form.Group>


               <Form.Group widths="equal">
                  <FormInput
                     value={city}
                     onChange={props.handleOnChange('city', 'userData')}
                     name="city"
                     label="City*"
                     placeholder="City*"
                     validators={['required']}
                     errorMessages={['This field is required']}
                     size="huge"
                  />
                  <FormInput
                     fluid
                     value={region}
                     onChange={props.handleOnChange('region', 'userData')}
                     name="region"
                     label="State / Region*"
                     placeholder="State / Region*"
                     validators={['required', 'maxStringLength: 2', 'isString']}
                     errorMessages={['This field is required', 'Please enter the 2 letter abbreviation for your state', 'Please only enter strings']}
                     size="huge"
                  />
                  <FormInput
                     fluid
                     value={postal}
                     onChange={props.handleOnChange('postal', 'userData')}
                     name="postal"
                     label="Postal*"
                     placeholder="Postal*"
                     validators={['required', 'minNumber:10000', 'maxNumber:99999']}
                     errorMessages={['This field is required', 'Please enter a 5 digit postal code (numbers only!)', 'Please enter a 5 digit postal code (numbers only!)', 'Please enter a 5 digit postal code (numbers only!)']}
                     size="huge"
                  />

               </Form.Group>

               <Button
                  animated
                  color='teal'
                  size="large"
               >
                  <Button.Content visible>Quote</Button.Content>
                  <Button.Content hidden>
                     <Icon name='arrow right' />
                  </Button.Content>
               </Button>
            </FormValidate>

         </div>
      </>
   )
}


export default withRouter(RatingScreen);