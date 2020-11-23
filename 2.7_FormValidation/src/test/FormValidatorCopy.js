import React from "react";
    // A
const validationRules = {
    required: val => val !== null && val !== undefined && val !== "",

    phone: phone => {
        const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return re.test(String(phone));
      },

      email: email => {
        const re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
        return re.test(String(email).toLowerCase());
      }
}


class FormValidator extends React.Component {
    
    
    // ------------------ Section B : Constructor -------------------//

    constructor(props) {
        super(props);

    // B.1 - จัดการ error message
    this.formValidationRules = {
        firstName : [
            {rule : validationRules.required, message: "First name is required"}
        ],
        lastName : [
            {rule : validationRules.required, message: "Last name is required"}
        ],
        phone : [
            {rule : validationRules.phone, message : "Phone number is invalid"}
        ],
        email : [
            {rule : validationRules.required, message: "Email is required"},
            {rule : validationRules.email, message: "Email is in valid"}
        ]
};
    // B.2
    this.fields = ["firstName", "lastName", "phone", "email"];

    // B.3 -ตั้ง State
    this.state = {
        signupForm : {isValid : false },
        firstName : {value: "", isTouched : false, isValid : false, errors : []},
        lastName : {value: "", isTouched : false, isValid : false, errors : []},
        phone : {value: "", isTouched : false, isValid : false, errors : []},
        email : {value: "", isTouched : false, isValid : false, errors : []},
    }

    }


    // -------------------- Section C : Function -------------------//

    //C1 - ฟังก์ชันที่ตั้งค่า State ใหม่ตาม input และส่งไปให้ฟังก์ชัน ValidateForm
    handleFieldChange = e => {
        let newState = {...this.state};
        newState[e.target.name].value = e.target.value; //แก้ค่าใน state เฉพาะ value
        this.validateForm(newState);
    }

    //C2 - ฟังก์ชัน Validate 
    validateForm = newState => {
        newState = newState || {...this.state}; // Set Default กรณีที่ไม่มีค่า argument

        this.fields.forEach(fieldName => {
            let newField = newState[fieldName];
            newField.errors = [];
            newField.isValid = true;

            this.formValidationRules[filedName].forEach(vRule=> {

                if(!vRule.rule(this.state[fieldName].value)){

                    
                }
            })


        })
    };

    componentWillMount() {
        this.validateForm();
      }
}