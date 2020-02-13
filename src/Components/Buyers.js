import React, { useState } from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
// function Buyers() {
//   const [inputs, setInputs] = useState();
//   const [response, setResponse] = useState();

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   }
//   console.log(inputs);
//   async function postData() {
//     const resData = await axios.post('/api/buyers', inputs);
//     setResponse(resData.data);
//   }
//   console.log(response);
const Buyers = props => {
  const [inputs, setInputs] = useState({
    productName: '',
    quantity:'',
    briefDescription: '',
    location: '',
    name: '',
    contact: ''
  });

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const addProduct = await axios.post('/buyerspost', inputs);
    console.log(addProduct);
    return props.history.push('/buyerspost');
  };
  console.log(inputs);

  const { productName, quantity, description, location, name, contact } = inputs;

  return (
    <div className='buyers'>
      <h5 className='bp'>Create your requests</h5>
      <h5 className='bp-page'>Buyers page</h5>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Product Name</Label>
            <Input onChange={handleChange} type='text' name='productName' value={productName} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Quantity</Label>
            <Input onChange={handleChange} type='text' name='quantity' value={quantity} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Brief description</Label>
            <Input onChange={handleChange} type='text' name='briefDescription' value={description} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Location</Label>
            <Input onChange={handleChange} type='text' name='location' value={location} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Name</Label>
            <Input onChange={handleChange} type='text' name='name' value={name} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Contact</Label>
            <Input onChange={handleChange} type='number' name='contact' value={contact} />
          </FormGroup>
        </Col>
      </Row>
      <Button
        className='btn-btn'
        color='success'
        onClick={handleSubmit}
        style={{ color: 'white' }}
      >
        Send request
      </Button>{' '}
    </div>
  );
};

export default Buyers;
