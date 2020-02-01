import React, { useState } from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
function Buyers() {
  const [inputs, setInputs] = useState();
  const [response, setResponse] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }
  console.log(inputs);
  async function postData() {
    const resData = await axios.post('/api/buyers', inputs);
    setResponse(resData.data);
  }
  console.log(response);
  return (
    <div>
      <h5 className='bp'>Create your requests</h5>
      <h5 className='bp-page'>Buyers page</h5>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for='exampleTown'>Product Name</Label>
            <Input onChange={handleChange} type='text' name='productName' />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for='examplePassword'>Quantity</Label>
            <Input onChange={handleChange} type='text' name='quantity' />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for='exampleTown'>Brief description</Label>
            <Input onChange={handleChange} type='text' name='description' />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for='examplePassword'>Location</Label>
            <Input onChange={handleChange} type='text' name='location' />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for='exampleTown'>Name</Label>
            <Input onChange={handleChange} type='text' name='name' />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for='examplePassword'>Contact</Label>
            <Input onChange={handleChange} type='text' name='contact' />
          </FormGroup>
        </Col>
      </Row>
      <Button
        className='btn-btn'
        color='success'
        onClick={postData}
        style={{ color: 'white' }}
      >
        Send request
      </Button>{' '}
      <hr />
      <h5>Recent posts from farmers</h5>
    </div>
  );
}

export default Buyers;
