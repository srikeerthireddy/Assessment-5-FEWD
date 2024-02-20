// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Books from './components/Books';
import Form from './components/Form';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
       <Route path="/" element={<Books/>}/>
        <Route path="/register" element={<Form/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
