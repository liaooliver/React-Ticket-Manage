import React, { useState, useEffect } from 'react';
 
import Main from './pages/Main';
import Login from './pages/Login';
import stringify from 'uuid/dist/stringify';

function App() {

  const [isAuth, setisAuth] = useState(false)
  const pass = () => {
    setisAuth(!isAuth)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify('Oliver'))
  },[])

  return (
    <div>
      {
        isAuth ?　<Login pass={pass} /> : <Main />
      }
    </div>
  );
}

export default App;
