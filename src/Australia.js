import React from 'react'

export const Australia = () => {
    const players=['Gilchrist','Pointing','Symonds','Hayden','Bretlee','Mcgrath']
  return (
    <div>
        <h5>Australia Team</h5>
        
        <ol>
            {
                players.map((obj,index)=>{
                  return <div>
                     <li>{obj}</li>
                     </div>

                })
            }
        </ol>
        </div>
  )
}
