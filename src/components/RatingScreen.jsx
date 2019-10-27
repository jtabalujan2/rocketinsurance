import React from 'react'
import Button from './Button'

const RatingScreen = (props) => {


   const handleQuoteClick = (() => {
      this.setState()
   })

   // const linkToQuote = () => {
   //    return <Link to={`/quote/${props.state.userData.firstName}`} ></Link >

   // }




   return (
      <>
         <div>
            <h2>Tell Me About Yourself!</h2>
            <form>
               First Name: <input type="text" name="fname" onChange={props.handleOnChangeFor('firstName')} value={props.state.userData.firstName}></input><br />
               Last Name: <input type="text" name="lname" onChange={props.handleOnChangeFor('lastName')} value={props.state.userData.lastName}></input><br />

               <div className="horizontal-line">-----------</div>
               Address Line 1: <input type="text" name="address1" onChange={props.handleOnChangeFor('address1')} value={props.state.userData.address1}></input><br />
               Address Line 2: <input type="text" name="address2" onChange={props.handleOnChangeFor('address2')} value={props.state.userData.address2}></input><br />
               City: <input type="text" name="city" onChange={props.handleOnChangeFor('city')} value={props.state.userData.city}></input><br />
               Region: <input type="text" name="region" onChange={props.handleOnChangeFor('region')} value={props.state.userData.region}></input><br />
               Postal: <input type="text" name="postal" onChange={props.handleOnChangeFor('postal')} value={props.state.userData.postal}></input><br />
            </form>

            <Button handleQuoteClick={handleQuoteClick} />

         </div>
      </>

   )
}


export default RatingScreen;