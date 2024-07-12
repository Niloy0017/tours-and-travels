import React, { useState } from 'react'
import data from '../helper/data'
import { Tourcard } from '../components/Tourcard'

export const Tours = () => {

    const [tours,setTours] = useState(data)

  return (
    <div className='patro'>
        <div className="title">Tours</div>
        <div className='cards'>
        {
            tours.map((tour)=>(
                <Tourcard key={tour.id} tour={tour} ></Tourcard>
            ))
        }
        </div>
    </div>
  )
}
