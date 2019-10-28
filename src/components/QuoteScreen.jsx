import React from 'react'

const QuoteScreen = (props) => {

    function useQuery() {
        return new URLSearchParams(props.location.search);
    }



    let queryUrlId = useQuery().get("id");

    return (
        <div>
            <h1>{queryUrlId}</h1>
        </div>
    )
}





export default QuoteScreen;