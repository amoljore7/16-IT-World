import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Layout from './Layout/layout';
import Login from './Layout/login';

function App() {
  const [loginData] = useState(JSON.parse(localStorage.getItem('user')));
  return (
      <div>
        {
          loginData ?
             (<Layout />)
            : 
              (
                <BrowserRouter>
                  <Switch>
                    <Route path='/' component={Login} />
                  </Switch>
                </BrowserRouter>
              )
        }  
      
      </div>
  );

}

export default App;
