import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function BuyersOrders() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    pullData();
  },[]);

  const pullData = () => {
    axios
      .post('/buyerspostdata')
      .then(data => {
        setPosts(data.data);
      })
      .catch(err => console.log(err));
  }

    console.log('posts');
    return (
      <div>
        <Link to='/buyers'>
          <button className='btn btn-info'>Create an order</button>
        </Link>
        <h3 className='f-posts'>Buyers orders</h3>

        <div className='post-main'>
          {posts &&
            posts.map((item, i) => {
              const {
                _id,
                productName,
                quantity,
                briefDescription,
                location,
                name,
                contact
              } = item;
              return (
                <div className='post-item' key={i}>
                  <h2>{productName}</h2>
                  <div>
                    <p>Quantity: {quantity}</p>
                    <p>Brfief description: {briefDescription}</p>
                    <p>Location: {location}</p>
                    <p>Name: {name}</p>
                    <p>Contact: {contact}</p>
                    <button
                      className='btn btn-info'
                      onClick={() => {
                        axios
                          .delete(`/buyerspost/${_id}`)
                          .then(() => {
                            pullData();
                            return console.log('Succesfuly deleted');
                          })
                          .catch(error => console.log(error));
                      }}
                    >
                      Delete Post
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

export default BuyersOrders;
