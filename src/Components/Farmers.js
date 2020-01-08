import React from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

class Farmers extends React.Component {
  render() {
    return (
      <div>
        <h5>Create posts</h5>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleEmail'>Product</Label>
              <Input type='email' name='email' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Brief description</Label>
              <Input type='password' name='password' />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleEmail'>Location</Label>
              <Input type='email' name='email' id='exampleEmail' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Name</Label>
              <Input type='password' name='password' id='examplePassword' />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleEmail'>Contact</Label>
              <Input type='email' name='email' id='exampleEmail' />
            </FormGroup>
          </Col>
        </Row>
        <Button>Send post</Button>
        <hr />
        <h5>Send questions to farming experts</h5>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleEmail'>Question</Label>
              <Input type='email' name='email' id='exampleEmail' />
            </FormGroup>
          </Col>
        </Row>
        <Button>Send</Button>
        <hr />
        <h5>Recent posts from buyers</h5>
        <div className='card'>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label htmlFor=''>Product</label>
                <input
                  type='name'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Quantity</label>
                <input
                  type='name'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Brief descrition</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Location</label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Name</label>
                <input
                  type='town'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Contact</label>
                <input
                  type='town'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Farmers;
