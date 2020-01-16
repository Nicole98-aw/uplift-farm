import React from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

class Buyers extends React.Component {
  render() {
    return (
      <div>
        <h5 className='bp'>Create your requests</h5>
        <h5 className='bp-page'>Buyers page</h5>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleTown'>Product Name</Label>
              <Input type='town' name='town' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Quantity</Label>
              <Input type='email' name='password' />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleTown'>Brief description</Label>
              <Input type='town' name='town' id='exampleTown' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Location</Label>
              <Input type='town' name='password' id='examplePassword' />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for='exampleTown'>Name</Label>
              <Input type='town' name='name' id='exampleName' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='examplePassword'>Contact</Label>
              <Input type='town' name='password' id='examplePassword' />
            </FormGroup>
          </Col>
        </Row>
        <Button
          className='btn-btn'
          color='success'
          onClick={this.setSignUp}
          style={{ color: 'white' }}
        >
          Send request
        </Button>{' '}
        <hr />
        <h5>Recent posts from farmers</h5>
      </div>
    );
  }
}
export default Buyers;
