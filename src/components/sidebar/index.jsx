import React, { Component } from 'react';
import PollList from "./pollList"
import {Input, Button, Modal, ModalBody, ModalHeader} from 'reactstrap'
import PollForm from '../poll-form'

class SideBar extends Component {

state ={
    openModal:false
}
 toggleModal=()=>{
this.setState({
    openModal:!this.state.openModal
})
 }

    render() {
        return (
            <div style={{background:"#efefef",padding:"10px"}}>
                <div className="d-flex mb-5">
                    <Input 
                    type="search" 
                    placeholder= "search" 
                    value ={this.props.searchTerm} 
                    onChange={e=>this.props.handleSearch(e.target.value)}/>
                    <Button  color="success"
                    className="ml-2"
                    onClick={this.toggleModal}
                    > New</Button>
                </div>
                <h3>List of Poll</h3>
                <hr></hr>
                <PollList
                polls={this.props.polls}
                selectedPoll={this.props.selectedPoll}
                />
               <Modal
					isOpen={this.state.openModal}
					toggle={this.toggleModal}
					unmountOnClose={true}
				>
					<ModalHeader toggle={this.toggleModal}>
						Create A New Poll
					</ModalHeader>
					<ModalBody>
						<PollForm submit={this.props.addNewPoll} />
					</ModalBody>
				</Modal>
            </div>
        );
    }
}

export default SideBar;