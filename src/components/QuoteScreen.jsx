import React from 'react'

const QuoteScreen = (props) => {

    function useQuery() {
        return new URLSearchParams(props.location.search);
    }

    const queryUrlId = useQuery().get("id");
    const local = JSON.parse(localStorage.getItem(`${queryUrlId}`))

    console.log(local)
    return (
        <div>
            <h1>{queryUrlId}</h1>
        </div>
    )
}


//UP2688975


export default QuoteScreen;