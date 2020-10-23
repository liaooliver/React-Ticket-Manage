import React, { useState } from 'react';
 
import Main from './pages/Main';
import Login from './pages/Login';

function App() {

  const [isAuth, setisAuth] = useState(false)
  const pass = () => {
    setisAuth(!isAuth)
  }

  return (
    <div>
      {
        isAuth ?　<Login pass={pass} /> : <Main />
      }
    </div>
  );
}

export default App;
