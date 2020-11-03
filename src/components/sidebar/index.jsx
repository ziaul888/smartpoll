import React, { Component } from 'react';
import PollList from "./pollList"
import {Input, Button, Modal, ModalBody, ModalHeader} from 'reactstrap'


class SideBar extends Component {

state ={
    isOpen:false
}
 toggleModal=()=>{
this.setState({
    isOpen:this.state.openModal
})
 }

    render() {
        return (
            <div style={{background:"#efefef",padding:"10px"}}>
                <div className="d-flex mb-5">
                    <Input type="search" placeholder= "search" value ={this.props.searchTerm} onChange={e=>this.props.handleSearch(e.target.value)}/>
                    <Button  color="success"className="ml-2
                    onClick={this.toggleModel}
                    "> New</Button>
                </div>
                <h3>List of Poll</h3>
                <hr></hr>
                <PollList
                polls={this.props.polls}
                selectPoll={this.props.selectPoll}
                />
                <Modal isOpen={this.state.openModal}
                toggle={this.toggleModal}
                unmountOnClose={true}>
                    <ModalHeader toggle={this.toggleModal}>
                 Create A New Poll
                    </ModalHeader>
                  <ModalBody>this is modal body</ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SideBar;