import React from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';

class Buyers extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default Buyers;
