import React, { useState, useEffect } from 'react';
 
import Main from './pages/Main';
import Login from './pages/Login';

function App() {

  const [isAuth, setIsAuth] = useState(true)
  const pass = (active) => {
    setIsAuth(active)
  }

  // useEffect(() => {
  //   const token = localStorage.getItem('oauth-token')
  //   if (token) {
  //     setIsAuth(true)
  //   }
  // },[])

  return (
    <div>
      {
        !isAuth ?　<Login pass={pass} /> : <Main pass={pass} />
      }
    </div>
  );
}

export default App;
