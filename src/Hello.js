import React from 'react';
import './Hello.css';


class Learner extends React.Component{
    render(){
        return <div>
        <p>I am Hema , learning React js </p>
        </div>
    }

}
class Hello extends React.Component{
    constructor()
    {
        super();
    }
    render(){

        return <div>
            <h5>Hello React Learner!!!.  </h5>
            <Learner/>
        </div>
    }
}
export default Hello;