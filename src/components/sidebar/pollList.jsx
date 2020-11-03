 import React, { Component } from 'react';
 import {ListGroup, ListGroupItem} from 'reactstrap' 


 const PollList= props =>{
   if (props.polls.length=== 0){

    return<p> there is no poll</p>
 }  
 
 return(
   <ListGroup>
      {
         props.polls.map(poll=>(
           <ListGroupItem
           key={poll.id}
           onClick={()=>props.selectPoll(poll.id)}
           style ={{cursor:"pointer"}}>
                {poll.title.length >39 ?poll.title.substr(0,30) +"...":poll.title}

           </ListGroupItem>  
         ))
      } 
   </ListGroup>
 )
    }
 export default PollList