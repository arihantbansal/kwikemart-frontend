import React from 'react'
import { Form,Row,Col,Button } from "react-bootstrap";
const NewUser = () => {
    return (
        <div>
            <div className="newUser">
            <Form className="newu" >
                
                <Form.Group   controlId="exampleForm.ControlInput1">
                <Row ><Form.Label className="username" >Add a new User</Form.Label></Row>
                <Row > <Form.Control type="text" placeholder="Add Name" /></Row>
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Role : </Form.Label>
                    <Form.Control as="select">
                    <option>Admin</option>
                    <option>Cashier</option>
                    <option>Staff</option>
                    
                    
                    </Form.Control>
                </Form.Group>
                <Form.Group   controlId="exampleForm.ControlInput1">
                <Row ><Form.Label  >Set Username</Form.Label></Row>
                <Row > <Form.Control type="text" placeholder="" /></Row>
                </Form.Group>
                <Form.Group   controlId="exampleForm.ControlInput1">
                <Row ><Form.Label  >Set Password</Form.Label></Row>
                <Row > <Form.Control type="text" placeholder="" /></Row>
                </Form.Group>
                <Button className="newuButton" variant="secondary" type="submit">
                    ADD
                </Button>
                </Form>
        </div>
        </div>
    )
}

export default NewUser
