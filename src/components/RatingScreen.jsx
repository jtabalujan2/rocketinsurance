import React from 'react'
import Button from './Button'
import { generateQuote } from '../utl/api'

const RatingScreen = (props) => {


   const handleQuoteClick = (async () => {
      //submit final user input
      let event = {
         target: {
            value: false
         }
      }
      props.handleOnChange('isEdit', 'userData')(event)

      //generateQuote
      const response = await generateQuote(props.state.userData)
      event = {
         target: {
            value: response
         }
      }
      console.log('reponse: ', response)
      console.log('quoteID: ', response.quote.quoteId)
      props.handleOnChange(`${response.quote.quoteId}`, 'quotes')(event)

   })


   return (
      <>
         <div>
            <h2>Tell Me About Yourself!</h2>
            <form>

               First Name: <input type="text" name="fname" onChange={props.handleOnChange('firstName', 'userData')} value={props.state.userData.firstName}></input><br />
               Last Name: <input type="text" name="lname" onChange={props.handleOnChange('lastName', 'userData')} value={props.state.userData.lastName}></input><br />

               <div className="horizontal-line">-----------</div>
               Address Line 1: <input type="text" name="address1" onChange={props.handleOnChange('address1', 'userData')} value={props.state.userData.address1}></input><br />
               Address Line 2: <input type="text" name="address2" onChange={props.handleOnChange('address2', 'userData')} value={props.state.userData.address2}></input><br />
               City: <input type="text" name="city" onChange={props.handleOnChange('city', 'userData')} value={props.state.userData.city}></input><br />
               Region: <input type="text" name="region" onChange={props.handleOnChange('region', 'userData')} value={props.state.userData.region}></input><br />
               Postal: <input type="text" name="postal" onChange={props.handleOnChange('postal', 'userData')} value={props.state.userData.postal}></input><br />
            </form>

            <Button handleQuoteClick={handleQuoteClick} buttonName={'Quote'} />

         </div>
      </>

   )
}


export default RatingScreen;