import React from 'react'
import {Link} from 'react-router-dom'

export default class Shop extends React.Component{
    render(){
        return(
           <div>
                Shop text
                <Link to = '/'><button >Home</button></Link>{/* Going to be a clickable logo*/}
            </div> 
        )
        
    }
}
