import React from 'react'
import Button from './Button'

const RatingScreen = (props) => {

   const handleQuoteClick = () => {

   }

   const handleOnChangeFor = (propertyName) => (event) => {
      this.setState({
         userData : {
            [propertyName]: event.target.value
         }
      })
   }


   return (
      <>
         <div>
            <h2>Tell Me About Yourself!</h2>
            <form>
               First Name: <input type="text" name="fname" onChange={handleOnChangeFor('lastName')} value={props.state.userData.firstName}></input><br />
               Last Name: <input type="text" name="fname"></input><br />

               <div className="horizontal-line">-----------</div>
               Address: <textarea rows="4" cols="50"></textarea><br />
               City: <input type="text" name="address"></input><br />
               Region: <input type="text" name="address"></input><br />
               Postal: <input type="text" name="address"></input><br />
            </form>

            <Button handleQuoteClick={handleQuoteClick} buttonName={"Quote"} />


         </div>
      </>

   )
}


export default RatingScreen;