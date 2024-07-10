import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Components/App';

function Main()
{
  return(
    <div>
      <App/>
    </div>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'));