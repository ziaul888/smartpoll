
import React, { Component } from 'react';
import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import PollForm from '../poll-form';
 import ParticipationForm from './Participatioin-form'

class MainContent extends Component {
  
    state={
        openModal : false
    }
    toggleModal=()=>{
        this.setState({
            openModal:!this.state.openModal
        })
    }
    render() {
if ( Object.keys(this.props.poll).length === 0){
    return(
        <div>
            <h1> WelCome to app</h1>
            <p>
                you can create as many poll  as you want.
            </p>
        </div>
    )
}
const { poll, getOption, updatePoll, deletePoll}= this.props
        return (
            <div>
                <h1>{poll.title}</h1>
                <p>{poll.description}</p>
                <br></br>
                <ParticipationForm
                poll={poll}
                getOption={getOption}
                toggleModal={this.toggleModal}
                deletePoll={deletePoll}
                />
                <Modal
                isOpen={this.state.openModal}
                toggle={this.toggleModal}
                unmountOnClose={true}
                >
               <ModalHeader toggle={this.toggleModal}>
                Update Poll
               </ModalHeader>
                  <ModalBody>
                      <PollForm
                      poll={poll}
                      isUpdate={true}
                      submit={updatePoll}
                      buttonValue ="Update poll"
                      />
                  </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default MainContent;