import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props)
        //Create state
        this.state = {
            count: 0,
        }
    }
   componentDidMount(){
   this.timer = setInterval(() => {
        console.log("page loading")
        
    }, 1000);
   }

   componentWillUnmount(){
    clearInterval(this.timer)
   }


    render(){
        return (
            <>
            <h1>Profile page</h1>
            <h2>{this.state.count}</h2>
            <button onClick={()=> this.setState({count: 1})}>SetCount</button>
            </>
            
        )
    }
}

export default Profile



/*
first parent constructor will called after
parent render will called and 

then parent componentDidMount called

*/