import React from 'react'

export const Srilanka = () => {
    const players=['JayaSurya','Jayavardhan','Sangakara','Malinga','Murildharan']
  return (
    <div>
        <h5>Srilanka Team</h5>

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
