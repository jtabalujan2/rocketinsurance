import React from 'react'
import { withRouter } from 'react-router-dom'
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
      //generateQuote and sets it to state
      const response = await generateQuote(props.state.userData)
      const event = { target: { value: response } }

      //enables local storage in place of a back end to view previous customer quotes
      localStorage.setItem(`${response.quote.quoteId}`, JSON.stringify(response))

      currentQuote = response.quote.quoteId

   })




   return (
      <>
         <div>
            <h2>Tell Me About Yourself!</h2>
            <form>

               First Name: <input type="text" name="fname" onChange={props.handleOnChange('firstName', 'userData')} value={firstName}></input><br />
               Last Name: <input type="text" name="lname" onChange={props.handleOnChange('lastName', 'userData')} value={lastName}></input><br />

               <div className="horizontal-line">-----------</div>
               Address Line 1: <input type="text" name="address1" onChange={props.handleOnChange('address1', 'userData')} value={address1}></input><br />
               Address Line 2: <input type="text" name="address2" onChange={props.handleOnChange('address2', 'userData')} value={address2}></input><br />
               City: <input type="text" name="city" onChange={props.handleOnChange('city', 'userData')} value={city}></input><br />
               Region: <input type="text" name="region" onChange={props.handleOnChange('region', 'userData')} value={region}></input><br />
               Postal: <input type="text" name="postal" onChange={props.handleOnChange('postal', 'userData')} value={postal}></input><br />
            </form>

            <button onClick={async () => {
               await handleQuoteClick()
               props.history.push(`/quote?id=${currentQuote}`)
            }}>
               Quote
            </button>


         </div>
      </>

   )
}


export default withRouter(RatingScreen);