import React from 'react'

const Button = (props) => {
   return(
      <button type="button" onClick={props.handleQuoteClick}>{props.buttonName}</button>
   )
}


export default Button;