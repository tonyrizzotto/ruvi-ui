import React from 'react';
import { useLazyQuery, gql } from '@apollo/client'

const GET_ACCOUNT = gql`
  query FirstQuery {
    accounts {
      hello
    }
  }
`

function GraphTest() {
  const [getData, { loading, error, data } ] = useLazyQuery(GET_ACCOUNT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div key="1">
      {data && (<p>{data.accounts.hello}</p>)}
      <button 
        onClick={getData}
      >
      Click For Data
      </button>
    </div>
  )
}

export default GraphTest;