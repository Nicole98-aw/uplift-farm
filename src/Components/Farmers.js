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
      </div>
    );
  }
}
export default Farmers;