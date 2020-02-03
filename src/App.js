import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';
import Media from "./components/Media";
import axios from "axios";

function App() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/`)
      .then(({data:{mock_data: posts}})=> {
        setPosts(posts)
      })
  },[]);
  
  return (
    <div className="App">
        {posts?
          posts.map((post,index)=> <Media key={`${post.title}-${index}`}{...post}/>)
          :
          <h1>Loading...</h1>
        }
    </div>
  );
}

export default App;
