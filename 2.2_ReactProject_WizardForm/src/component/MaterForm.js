import React from 'react' 
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import 'bootstrap/dist/css/bootstrap.min.css';


class MasterForm extends React.Component {
    
    
    //ประกาศ State
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:  '',
        username: '',
        password: '', 
      }
    }
    
    // สร้างฟังก์ชันไว้ใช้งาน
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit = event => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
               Email: ${email} \n 
               Username: ${username} \n
               Password: ${password}`)
               this.setState({
                currentStep: 1,
                email:  '',
                username: '',
                password: '', 
              })
      }
        /*
  * Test current step with ternary
  * _next and _previous functions will be called on button click
        */
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    

      /*
* the functions for our button
เพิ่มฟังก์ชันให้ปุ่มต่างๆของเรา โดยเป็นแบบ Conditional Rendering
ปุ่มจะไม่ได้ถูกแสดงผลตลอด ขึ้นอยู่กับเงื่อนไข
*/
previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1 && currentStep !==4){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
  submitButton(){
    let currentStep = this.state.currentStep;
    if(currentStep === 3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this.handleSubmit}>
        Submit
        </button>        
      )
    }
    return null;
  }
  

      render() {    
        return (
          <>
          <h1>A Wizard Form!</h1>
          <p>Step {this.state.currentStep} </p>
            
          <form onSubmit={this.handleSubmit}>
            {/* Step1-Step3 ก็เป็น Conditional Rendering แต่แยกไปอีกไฟล์ */}
            <Step1 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                email={this.state.email}
            />

            <Step2 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                username={this.state.username}
            />
      
            <Step3 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                password={this.state.password}
            />

            {/* ปุ่มพวกนี้เป็น Conditional Rendering */}
             {this.previousButton()}
             {this.nextButton()}
             {this.submitButton()}
             
        </form>
        </>
  )
}
          
    }

export default MasterForm;