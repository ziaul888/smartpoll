import React from "react"
import {Form,FormGroup,Label,FormFeedback,Button,Input} from "reactstrap"


const myform=({ 
    title,
    description,
    options,
    errors,
    buttonValue,
    handleChange,
    handleOptionChange,
    createOption,
    deleteOptions,
    handleSubmit
})=>(
   <Form onSubmit={ handleSubmit}>
       <FormGroup>
           <Label for= "title"> Title</Label>
           <Input
           name="title"
           id="title"
           value={title}
           placeholder="a dummy title"
           onChange={handleChange}
           isVaild= {errors.title ? true:false}
           />
           {errors.title && <FormFeedback> {errors.title}</FormFeedback>}
       </FormGroup>
       <FormGroup>
           <Label for= "description"> description</Label>
           <Input
           type="textarea"
           name="description"
           id="description"
           value={description}
           placeholder="a dummy title"
           onChange={handleChange}
           isVaild= {errors.description ? true:false}
           />
           {errors.title && <FormFeedback> {errors.description}</FormFeedback>}
       </FormGroup>
       <FormGroup>
           <Label>
               Enter Options
               <span 
               style={{
                   marginLeft:'3px',
                   background:'green',
                   color:'white',
                   padding:'5px',
                   borderRadius:'5px',
                   cursor:'pointer'                  
               }}
               onClick={createOption}
               >Add option</span>
           </Label>
           {
               options.map((opt, index)=>(
                   <div key={opt.id} className="d-flex my-2">
                    <Input value={opt.value}
                    onChange={e => handleOptionChange(e, index)}
                    invalid={
                        errors.options && errors.options[index] ?true:false
                    }
                    >
                    </Input>
                    <Button color="danger"
                    disabled={options.length <= 2}
                    className="ml-2"
                    onClick={()=>deleteOptions(index)}
                    > Delete</Button>
                   </div>

               ))
           }
       </FormGroup>
       <Button color="primary" type="submit">
           {buttonValue}
       </Button>

   </Form>
)
export default myform