import { useQuery } from "@apollo/client"
import { useEffect } from "react"
import { GET_LOCATIONS } from "../App"

type dataProps={
    id: string,
    name: string,
    photo: string,
    description: string
}

export const DisplayLocations=()=>{

    const {loading, error, data}= useQuery(GET_LOCATIONS)

    if(loading) return <p>Loading...</p>

    if(error) return <p>Error: {error.message}</p>

    console.log(21212, data)


    return(
        <>
        {data.locations.map(({id, name, description, photo}:dataProps)=>{
            return(
           <div key={id}>
            <h3>{name}</h3>
            <img src={`$(photo)`}/>
            <button>new demo</button>
           </div>
           )
        })}
        </>
    )
}