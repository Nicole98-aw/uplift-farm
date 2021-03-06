import React, { useState } from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const Farmers = props => {

  const [product, setProduct] = useState({
    productName: '',
    briefDescription: '',
    location: '',
    name: '',
    contact: ''
  });

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const addProduct = await axios.post('/farmerspost', product);
    console.log(addProduct);
    return props.history.push('/farmerspost');
  };
  console.log(product)

  const { productName, description, location, name, contact } = product;
  return (
    <div className='farmers'>
      <h5 className='fp'>Create posts</h5>
      <h5 className='fp-page'>Farmers page</h5>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Product Name</Label>
            <Input
              type='text'
              name='productName'
              value={productName}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Brief description</Label>
            <Input
              type='text'
              name='briefDescription'
              value={description}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Location</Label>
            <Input
              type='text'
              name='location'
              value={location}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Contact</Label>
            <Input
              type='number'
              name='contact'
              value={contact}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button
        className='btn-btn'
        color='success'
        style={{ color: 'white' }}
        onClick={handleSubmit}
      >
        Send post
      </Button>{' '}
      <hr />
      <h5>Send questions to farming experts</h5>
      {/* <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for='exampleName'>Question</Label>
            <Input type='name' name='name' id='exampleName' />
          </FormGroup>
        </Col>
      </Row> */}
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        className='txt-area'
        placeholder='write something...'
      ></textarea>
      <Button className='btn-btn' color='success' style={{ color: 'white' }}>
        Send
      </Button>{' '}
      <hr />
    </div>
  );
};

export default Farmers;
