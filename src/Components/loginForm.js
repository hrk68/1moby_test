import React , { useState } from 'react'
import '../Styles/loginForm.css'
import { Button,Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function LoginForm() {
    const [validated, setValidated] = useState(false);
    const [startDate, setStartDate] = useState();
    const handleSubmit = (event) => {
        
        const form = event.currentTarget;
        console.log(event.currentTarget,form.checkValidity())
        if (form.checkValidity() === false) {
            console.log('12312',event.currentTarget)
            event.preventDefault();
            event.stopPropagation();
          }
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }
    return (
        <div className="form-container">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>ทดลองใช้งานฟรี 7 วัน {validated} </h1>
                <p className="subH">(ทุก Feature)</p>
                <div className="formGroup name">
                    <Form.Group  controlId="validationName">
                        <Form.Label>ชื่อ</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            defaultValue=""
                        />
                    </Form.Group>
                </div>
                
                <div className="formGroup name">
                    <Form.Group  controlId="validationLastName">
                        <Form.Label>นามสกุล</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            defaultValue=""
                        />
                    </Form.Group>
                </div>
                <div className="formGroup">
                    <label>วันเกิด</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="formGroup">
                    <label>เพศ</label>
                    <Form.Group className="gender">
                        <Form.Check
                            inline
                            label="ชาย"
                            name="group1"
                            type="radio"

                        />
                        <Form.Check
                            
                            inline
                            label="หญิง"
                            name="group1"
                            type="radio"
                        />
                    </Form.Group>
                </div>
                <div className="formGroup mail">
                    <Form.Group  controlId="validationLastName">
                        <Form.Label>อีเมล</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            defaultValue=""
                        />
                    </Form.Group>
                </div>
                <Button type="submit">ส่งข้อมูล</Button>
            </Form>

        </div>
    )
}

export default LoginForm
