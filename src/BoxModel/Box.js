import { render } from '@testing-library/react'
import './Box.css'


const BoxChild=(props)=>
{
 
    return         <div class="box" >{props.num}</div>
        
  
}

const Box=()=>
{
 
    return <div>
       <div> <BoxChild num='1'/> <BoxChild num='2'/></div>
      <div> <BoxChild num='3'/> <BoxChild num='4'/></div>
        </div>
    

}
export default Box;