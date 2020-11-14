
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
 poll.id = shortid.generate()
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

  getOpinion=(respone)=>{
     const {polls} =this.state
     const poll =polls.find (p=>p.id ===respone.id)
     const option = poll.opinions.find(o=>o.id === respone.selectedOption);
     poll.totalVote++;
     option.vote++;
     const opinion = {
       id : shortid.generate(),
       name:respone.name,
       selectedOption: respone.selectedOption
     };
     poll.opinions.push(opinion)
     this.setState({
       polls
     })
  }

  handleSearch =(searchTerm)=>{

  }

  render() {
    return (
         <Container className="my-5">
           <Row>
             <Col md={4}>
               <SideBar 
               polls={this.state.polls}
               searchTerm={this.state.searchTerm}
               handleSearch={this.handleSearch}
               selectedPoll={this.selectedPoll}
               addNewPoll={this.addNewPoll}
               />
             </Col>
             <Col md={8}>
               <MainContent
               poll={this.state.selectedPoll}
               getOpinion={this.getOpinion}
               deletePoll={this.deletePoll}
               />              
             </Col>
           </Row>
         </Container>
    )
  }
}
