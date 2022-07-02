import React from 'react'

export const India = () => {
   const players=['Sachin','Kohli','Rohit','Dhoni','UV','Panth','Bumrah']
  return (
    <div>
        
       <h5>India Team</h5> 
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
