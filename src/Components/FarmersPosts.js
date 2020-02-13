import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FarmersPost() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    pullData();
  }, []);

  const pullData = () => {
    axios
      .post('/farmerspostdata')
      .then(data => {
        setPosts(data.data);
      })
      .catch(err => console.log(err));
  };

  console.log(posts);

  return (
    <div>
      <Link to='/farmers'>
        <button
          className='btn btn-info'
          style={{ textDecorationColor: 'white' }}
        >
          Create New Post
        </button>
      </Link>
      <h3 className='f-posts'>Farmers posts</h3>
      <div className='post-main'>
        {posts &&
          posts.map((item, i) => {
            const {
              _id,
              productName,
              briefDescription,
              location,
              name,
              contact
            } = item;
            return (
              <div className='post-item' key={i}>
                <h2>{productName}</h2>
                <div>
                  <p>Brief description: {briefDescription}</p>
                  <p>Location: {location}</p>
                  <p>Name: {name}</p>
                  <p>Contact: {contact}</p>
                  <button
                    className='btn btn-info'
                    onClick={() => {
                      axios
                        .delete(`/farmerspost/${_id}`)
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

export default FarmersPost;
