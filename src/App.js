import logo from './logo.svg';
import shortid from 'shortid'
import './App.css';
import MainContent from './components/main-content'
import SideBar from './components/sidebar'
import React, { Component } from 'react'
import { Container,Row,Col} from 'reactstrap'
import POLLS from './data/polls'

export default class App extends Component {

   state={
     polls:[],
     selectedPoll:{},
     searchTerm:""

   }

   componentDidMount(){
     this.setState({polls:POLLS})
   }
 addNewPoll= poll =>{
 poll.id = shortid.generate(),
 poll.created = new Date()
 poll.totalVote = 0
 poll.opinions=[]

 this.setState({
   polls:this.state.polls.concat(poll)
 })

}
 
updatePoll =updatedPoll =>{
 const polls =[...this.state.polls]
 const poll = polls.find(p=> p.id === updatedPoll.id)
 poll.title = updatedPoll.title
 poll.descrption= updatedPoll.descrption
 poll.opinions = updatedPoll.opinions
}
  deletePoll =pollId=> {
    const polls = this.state.polls.filter(p=> p.id !==pollId)
    this.setState({polls, selectedPoll:{}})
  }
  selectedPoll=pollId=>{
    const poll= this.state.polls.find(p=>p.id ===pollId)
    this.setState({
      selectedPoll:poll
    })

  }

  render() {
    return (
         <Container className="my-5">
           <Row>
             <Col md={4}>
               <SideBar/>
             </Col>
             <Col md={8}>
               <MainContent/>
             </Col>
           </Row>
         </Container>
    )
  }
}
