import React from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

class Buyers extends React.Component {
  render() {
    return (
      <div>
        <h5>Create a request</h5>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleEmail'>Product</Label>
              <Input type='email' name='email' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Quantity</Label>
              <Input type='password' name='password' />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleEmail'>Brief description</Label>
              <Input type='email' name='email' id='exampleEmail' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Location</Label>
              <Input type='password' name='password' id='examplePassword' />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleEmail'>Name</Label>
              <Input type='email' name='email' id='exampleEmail' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Contact</Label>
              <Input type='password' name='password' id='examplePassword' />
            </FormGroup>
          </Col>
        </Row>
        <Button>Send request</Button>
        <hr />
        <h5>Recent posts from farmers</h5>
        <div className='card'>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <input
                  type='name'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Full Names'
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Email'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='town'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Town'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Buyers;
