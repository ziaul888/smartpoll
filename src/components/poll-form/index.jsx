import React, { Component } from 'react';
import shortid from "shortid"  
import Form from './form'
  
const defaultOptions =[
    {id:shortid.generate(), value :'', vote:0 },
    {id:shortid.generate(), value :'', vote:0 }
]


class PollForm extends Component {
    
    state ={
        title:"",
        description:"",
        options:defaultOptions,
        errors: {}
    }
       
 handleChange =(event)=>{
     this.setState({
         [event.target.name]:event.target.value
     })
 }


 handleOptionChange =(event, index) =>{
   const {options} =this.state
   options[index].value =event.target.value
   this.setState({options});
 }

  createOption =()=>{
      const {options} =this.state;
      if(options.length < 5){
          options.push({
              id:shortid.generate(),
              value:"",
              vote:0
          })
          this.setState({options});

      }else{
          alert("You can create max 5 options")
      }
       
  }

  deleteOptions=(index)=>{
      const {options} = this.state    
    if (options.length> 2){
        options.splice(index, 1)
        this.setState({options})
    }else{
        alert(" you must have at least two options")
    }
    }

    handleSubmit =(event)=>{
    event.preventDefualt()
   const {isValid, errors}= this.validate();

    if(isValid){
    const {title, description, options}= this.state;
  
    this.props.submit({
        title,
        description,
        options
    })
    event.target.reset()
    this.setState({
        title:"",
        description:"",
        options:defaultOptions
    })
    }else{
        this.setState({errors})
}

    }

    validate = () => {
		const errors = {};
		const { title, description, options } = this.state;

		if (!title) {
			errors.title = 'Please Provide A Title';
		} else if (title.length < 20) {
			errors.title = 'Tittle Too Short';
		} else if (title.length > 100) {
			errors.title = 'Tittle Too Long';
		}

		if (!description) {
			errors.description = 'Please Provide A Description';
		} else if (description.length > 500) {
			errors.description = 'Description Too Long';
		}

		const optionErrors = [];
		options.forEach((opt, index) => {
			if (!opt.value) {
				optionErrors[index] = 'Option Text Empty';
				// optionErrors.push('Option Text Empty')
			} else if (opt.value.length > 100) {
				optionErrors[index] = 'Option Text Too Long';
				// optionErrors.push('Option Text Too Long')
			}
		});

		if (optionErrors.length > 0) {
			errors.options = optionErrors;
		}

		return {
			errors,
			isValid: Object.keys(errors).length === 0
		};
	
   
    }

    render() {
        const {title,description,options,errors}=this.state
        return (
            <Form
            title={title}
            description={description}
            options={options}
            buttonValue={this.props.buttonValue || 'create POll'}
            errors={errors}
            handleChange={this.handleChange}
            handleOptionChange={this.handleOptionChange}
            handleSubmit={this.handleSubmit}
            createOption={this.createOption}
            deleteOptions={this.deleteOptions}
            />

        );
    }
}

export default PollForm;