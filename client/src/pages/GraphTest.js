import React from 'react';
import { useQuery, gql } from '@apollo/client'

const GET_ACCOUNT = gql`
  query FirstQuery {
    accounts {
      hello
    }
  }
`

function GraphTest() {
  const { loading, error, data } = useQuery(GET_ACCOUNT)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div key="1">
      {data && (<p>{data.accounts.hello}</p>)}
    </div>
  )
}

export default GraphTest;