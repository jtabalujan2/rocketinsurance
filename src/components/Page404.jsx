import React from 'react'

const Page404 = ({ location }) => (
  <div>
    <h2>There was an error loading your quote<code>{location.pathname}</code></h2>
  </div>
);

export default Page404