import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let[data,setData] = useState([]);
  let[error,setError] = useState(null);
  let[dataStatus,setDataStatus] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      setData(response.data);
      setDataStatus(true);
    })  
    .catch((error) => {
      setError(error.message);
      setDataStatus(false);
    })
  })

  return (
    <div id='App'>
      {dataStatus?
      data.map((user) => {
        const {id,title,body} = user;
        return(
          <div key={id} className='card'>
            <h2>{title.slice(0,15)}</h2>
            <p>{body.slice(0,100)}</p>
          </div>
        )
      }):<h1>{error}</h1>}
    </div>
  )
}

export default App;
