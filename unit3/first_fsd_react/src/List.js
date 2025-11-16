import React from 'react'

const List = () => {
    const cities=['mys','bgl','has'];

  return (
    <div>
    <p>List</p>
    <ul>
        {cities.map((city,index)=>(
            <li key={index}> {city}</li>
        ))}
    </ul>  
    </div>
  )
}

export default List
